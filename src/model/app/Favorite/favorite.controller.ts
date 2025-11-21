import type { NextFunction, Request, Response } from "express";
import {
  addFavoriteService,
  getFavoritesByUserService,
  removeFavoriteService,
} from "./favorite.service.js";
import AppError from "../../helper/AppError.js";

export const addFavorite = async (req: Request, res: Response) => {
  try {
    const { userId, foodId } = req.body;

    const favorite = await addFavoriteService(userId, foodId);

    res.status(201).json({
      success: true,
      message: "Added to favorites",
      data: favorite,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const { userId, foodId } = req.body;

    await removeFavoriteService(userId, foodId);

    res.json({
      success: true,
      message: "Removed from favorites",
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getUserFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) return next(new AppError(404, "userId is require"));
    const favorites = await getFavoritesByUserService(userId);

    res.json({
      success: true,
      data: favorites,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
