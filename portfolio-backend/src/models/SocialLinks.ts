import mongoose, { Schema, HydratedDocument } from 'mongoose';
import { ISocialLinks } from '../types/index';

type ISocialLinksDocument = HydratedDocument<ISocialLinks>;

const socialLinksSchema = new Schema<ISocialLinksDocument>(
  {
    github: {
      type: String,
      required: [true, 'GitHub URL is required'],
      trim: true,
      match: [
        /^(https?:\/\/)?(www\.)?github\.com\/.+/,
        'Please provide a valid GitHub URL',
      ],
    },
    linkedin: {
      type: String,
      required: [true, 'LinkedIn URL is required'],
      trim: true,
      match: [
        /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/,
        'Please provide a valid LinkedIn URL',
      ],
    },
    leetcode: {
      type: String,
      required: [true, 'LeetCode URL is required'],
      trim: true,
      match: [
        /^(https?:\/\/)?(www\.)?leetcode\.com\/.+/,
        'Please provide a valid LeetCode URL',
      ],
    },
    resumeUrl: {
      type: String,
      required: [true, 'Resume URL is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const SocialLinks = mongoose.model<ISocialLinksDocument>(
  'SocialLinks',
  socialLinksSchema
);

export default SocialLinks;
