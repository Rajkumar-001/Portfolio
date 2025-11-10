import { Request, Response } from 'express';
import Project from '../models/Project';
import { IProject, IApiResponse, IPaginationQuery } from '../types/index';

export const getAllProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page = 1, limit = 10, featured } = req.query as IPaginationQuery & { featured?: string };

    const filter: any = {};
    if (featured === 'true') {
      filter.featured = true;
    }

    const skip = (Number(page) - 1) * Number(limit);
    const projects = await Project.find(filter)
      .sort({ startDate: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Project.countDocuments(filter);

    const response: IApiResponse<{
      projects: IProject[];
      pagination: { page: number; limit: number; total: number; pages: number };
    }> = {
      success: true,
      message: 'Projects fetched successfully',
      data: {
        projects,
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
      message: 'Failed to fetch projects',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const getProjectById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Project not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<IProject> = {
      success: true,
      message: 'Project fetched successfully',
      data: project,
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to fetch project',
      error: String(error),
    };
    res.status(500).json(response);
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const project = new Project(req.body);
    await project.save();

    const response: IApiResponse<IProject> = {
      success: true,
      message: 'Project created successfully',
      data: project,
    };

    res.status(201).json(response);
  } catch (error: any) {
    const response: IApiResponse<null> = {
      success: false,
      message: error.message || 'Failed to create project',
      error: String(error),
    };
    res.status(400).json(response);
  }
};

export const updateProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Project not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<IProject> = {
      success: true,
      message: 'Project updated successfully',
      data: project,
    };

    res.json(response);
  } catch (error: any) {
    const response: IApiResponse<null> = {
      success: false,
      message: error.message || 'Failed to update project',
      error: String(error),
    };
    res.status(400).json(response);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      const response: IApiResponse<null> = {
        success: false,
        message: 'Project not found',
      };
      res.status(404).json(response);
      return;
    }

    const response: IApiResponse<null> = {
      success: true,
      message: 'Project deleted successfully',
    };

    res.json(response);
  } catch (error) {
    const response: IApiResponse<null> = {
      success: false,
      message: 'Failed to delete project',
      error: String(error),
    };
    res.status(500).json(response);
  }
};
