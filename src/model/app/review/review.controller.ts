import type { Request, Response, NextFunction } from "express";
import { reviewService } from "./review.service.js";
import AppError from "../../helper/AppError.js";

const createReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const review = await reviewService.createReviewService(req.body);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAllReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviews = await reviewService.getAllReviewService();

    res.status(200).json({
      success: true,
      message: "Get all reviews",
      data: reviews,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "Review ID is required"));

    const review = await reviewService.getAReviewService(id);
    if (!review) return next(new AppError(404, "Review not found"));

    res.status(200).json({
      success: true,
      message: "Get single review",
      data: review,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const updateReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "Review ID is required"));

    const updated = await reviewService.updateReviewService(id, req.body);
    if (!updated) return next(new AppError(404, "Review not found"));

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: updated,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const deleteReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "Review ID is required"));

    const deleted = await reviewService.deleteReviewService(id);
    if (!deleted) return next(new AppError(404, "Review not found"));

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      data: deleted,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

export const reviewController = {
  createReviewController,
  getAllReviewController,
  getAReviewController,
  updateReviewController,
  deleteReviewController,
};
