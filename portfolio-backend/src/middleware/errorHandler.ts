import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { IApiResponse } from '../types/index';

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => ({
      field: 'param' in err ? err.param : 'unknown',
      message: err.msg,
    }));

    const response: IApiResponse<null> = {
      success: false,
      message: 'Validation failed',
      error: JSON.stringify(errorMessages),
    };
    res.status(400).json(response);
    return;
  }
  next();
};

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', error);

  const statusCode = error.statusCode || error.status || 500;
  const message = error.message || 'Internal Server Error';

  const response: IApiResponse<null> = {
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  };

  res.status(statusCode).json(response);
};

export const notFoundHandler = (
  req: Request,
  res: Response
): void => {
  const response: IApiResponse<null> = {
    success: false,
    message: 'Route not found',
  };
  res.status(404).json(response);
};
