import mongoose, { Schema, Document, HydratedDocument } from 'mongoose';
import { IProject } from '../types/index';

type IProjectDocument = HydratedDocument<IProject>;

const projectSchema = new Schema<IProjectDocument>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    longDescription: {
      type: String,
      trim: true,
      maxlength: [2000, 'Long description cannot exceed 2000 characters'],
    },
    techStack: {
      type: [String],
      required: [true, 'Tech stack is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'Tech stack must have at least one technology',
      },
    },
    github: {
      type: String,
      trim: true,
      match: [
        /^(https?:\/\/)?(www\.)?github\.com\/.+/,
        'Please provide a valid GitHub URL',
      ],
    },
    liveLink: {
      type: String,
      trim: true,
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        'Please provide a valid URL',
      ],
    },
    image: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model<IProjectDocument>('Project', projectSchema);

export default Project;
