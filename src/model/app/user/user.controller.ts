import type { Request, Response, NextFunction } from "express";
import { userService } from "./user.service.js";
import AppError from "../../helper/AppError.js";

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUserService(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAllUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUserService();

    res.status(200).json({
      success: true,
      message: "Get all users",
      data: users,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "User ID is required"));

    const user = await userService.getAUserService(id);
    if (!user) return next(new AppError(404, "User not found"));

    res.status(200).json({
      success: true,
      message: "Get single user",
      data: user,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "User ID is required"));

    const updated = await userService.updateUserService(id, req.body);
    if (!updated) return next(new AppError(404, "User not found"));

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updated,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "User ID is required"));

    const deleted = await userService.deleteUserService(id);
    if (!deleted) return next(new AppError(404, "User not found"));

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deleted,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

export const userController = {
  createUserController,
  getAllUserController,
  getAUserController,
  updateUserController,
  deleteUserController,
};
