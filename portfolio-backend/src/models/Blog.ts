import mongoose, { Schema, HydratedDocument } from 'mongoose';
import { IBlog } from '../types/index';

type IBlogDocument = HydratedDocument<IBlog>;

const blogSchema = new Schema<IBlogDocument>(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    excerpt: {
      type: String,
      required: [true, 'Blog excerpt is required'],
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    tags: {
      type: [String],
      required: [true, 'At least one tag is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'Tags must have at least one item',
      },
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    readTime: {
      type: Number,
      required: [true, 'Read time is required'],
      min: [1, 'Read time must be at least 1 minute'],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model<IBlogDocument>('Blog', blogSchema);

export default Blog;
