import type { Request, Response, NextFunction } from "express";
import { categoryService } from "./category.service.js";
import AppError from "../../helper/AppError.js";

const createCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await categoryService.createCategoryService(req.body);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAllCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await categoryService.getAllCategoryService();

    if (!categories) return next(new AppError(404, "No category found"));

    res.status(200).json({
      success: true,
      message: "Get all categories",
      data: categories,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getACategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const category = await categoryService.getACategoryService(id);

    if (!category) return next(new AppError(404, "Category not found"));

    res.status(200).json({
      success: true,
      message: "Get single category",
      data: category,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const updateCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const updated = await categoryService.updateCategoryService(id, req.body);

    if (!updated) return next(new AppError(404, "Category not found"));

    res.status(200).json({
      success: true,
      message: "Category updated",
      data: updated,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const deleteCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "ID is required"));

    const deleted = await categoryService.deleteCategoryService(id);

    if (!deleted) return next(new AppError(404, "Category not found"));

    res.status(200).json({
      success: true,
      message: "Category deleted",
      data: deleted,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

export const categoryController = {
  createCategoryController,
  getAllCategoryController,
  getACategoryController,
  updateCategoryController,
  deleteCategoryController,
};
