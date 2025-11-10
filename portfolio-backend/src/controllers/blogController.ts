import { Request, Response } from 'express';
import Blog from '../models/Blog';
import { IBlog, IApiResponse, IPaginationQuery } from '../types/index';

export const getAllBlogs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page = 1, limit = 10, tag } = req.query as IPaginationQuery & { tag?: string };

    const filter: any = { published: true };
    if (tag) {
      filter.tags = tag;
    }

    const skip = (Number(page) - 1) * Number(limit);
    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Blog.countDocuments(filter);

    const response: IApiResponse<{
      blogs: IBlog[];
      pagination: { page: number; limit: number; total: number; pages: number };
    }> = {
      success: true,
      message: 'Blogs fetched successfully',
      data: {
        blogs,
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
      message: 'Failed to fetch blogs',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const getBlogById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Blog not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<IBlog> = {
      success: true,
      message: 'Blog fetched successfully',
      data: blog,
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to fetch blog',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const createBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const blog = new Blog(req.body);
    await blog.save();

    const response: IApiResponse<IBlog> = {
      success: true,
      message: 'Blog created successfully',
      data: blog,
    };

    res.status(201).json(response);
  } catch (error: any) {
    const response: IApiResponse<null> = {
      success: false,
      message: error.message || 'Failed to create blog',
      error: String(error),
    };
    res.status(400).json(response);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Blog not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<IBlog> = {
      success: true,
      message: 'Blog updated successfully',
      data: blog,
    };

    res.json(response);
  } catch (error: any) {
    const response: IApiResponse<null> = {
      success: false,
      message: error.message || 'Failed to update blog',
      error: String(error),
    };
    res.status(400).json(response);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Blog not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<null> = {
      success: true,
      message: 'Blog deleted successfully',
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to delete blog',
      error: String(error),
    };
    res.status(500).json(response);
  }
};
