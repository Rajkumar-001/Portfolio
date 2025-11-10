import { Request, Response } from 'express';
import SocialLinks from '../models/SocialLinks';
import { ISocialLinks, IApiResponse } from '../types/index';

export const getSocialLinks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let socialLinks = await SocialLinks.findOne();

    if (!socialLinks) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Social links not found. Please create them first.',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<ISocialLinks> = {
      success: true,
      message: 'Social links fetched successfully',
      data: socialLinks,
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to fetch social links',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const createOrUpdateSocialLinks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let socialLinks = await SocialLinks.findOne();

    if (socialLinks) {
      // Update existing
      Object.assign(socialLinks, req.body);
      await socialLinks.save();

      const response: IApiResponse<ISocialLinks> = {
        success: true,
        message: 'Social links updated successfully',
        data: socialLinks,
      };

      res.json(response);
      return;
    }

    // Create new
    socialLinks = new SocialLinks(req.body);
    await socialLinks.save();

    const response: IApiResponse<ISocialLinks> = {
      success: true,
      message: 'Social links created successfully',
      data: socialLinks,
    };

    res.status(201).json(response);
  } catch (error: any) {
    const response: IApiResponse<null> = {
      success: false,
      message: error.message || 'Failed to save social links',
      error: String(error),
    };
    res.status(400).json(response);
  }
};
