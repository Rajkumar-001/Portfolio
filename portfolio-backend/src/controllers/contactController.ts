import { Request, Response } from 'express';
import ContactMessage from '../models/ContactMessage';
import emailService from '../services/emailService';
import { IContactMessage, IApiResponse } from '../types/index';

export const sendContactMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to database
    const contactMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });

    await contactMessage.save();

    // Send emails
    await emailService.sendContactNotification(name, email, subject, message);

    const response: IApiResponse<IContactMessage> = {
      success: true,
      message: 'Message sent successfully. You will receive a confirmation email.',
      data: contactMessage,
    };

    res.status(201).json(response);
  } catch (error: any) {
    const response: IApiResponse<null> = {
      success: false,
      message: error.message || 'Failed to send message',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const getAllContactMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page = 1, limit = 20, unreadOnly } = req.query;

    const filter: any = {};
    if (unreadOnly === 'true') {
      filter.read = false;
    }

    const skip = (Number(page) - 1) * Number(limit);
    const messages = await ContactMessage.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await ContactMessage.countDocuments(filter);

    const response: IApiResponse<{
      messages: IContactMessage[];
      pagination: { page: number; limit: number; total: number; pages: number };
    }> = {
      success: true,
      message: 'Contact messages fetched successfully',
      data: {
        messages,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit)),
        },
      },
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to fetch contact messages',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const markAsRead = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const message = await ContactMessage.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );

    if (!message) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Message not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<IContactMessage> = {
      success: true,
      message: 'Message marked as read',
      data: message,
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to mark message as read',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const deleteContactMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const message = await ContactMessage.findByIdAndDelete(id);

    if (!message) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Message not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<null> = {
      success: true,
      message: 'Message deleted successfully',
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to delete message',
      error: String(error),
    };
    res.status(500).json(response);
  }
};
