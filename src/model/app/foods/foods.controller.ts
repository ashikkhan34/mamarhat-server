import type { NextFunction, Request, Response } from "express";
import { foodService } from "./foods.service.js";
import AppError from "../../helper/AppError.js";
import { appendFile } from "fs";

const createFoodController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createFood = await foodService.createFoodService(req.body);
    res.status(201).json({
      message: "food create successful",
      success: true,
      data: createFood,
    });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getAllFoodController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allFoods = await foodService.getAllFoodService();
    if (!allFoods) return next(new AppError(404, "Foods not found"));
    res.status(200).json({
      success: true,
      message: "get all foods",
      data: allFoods,
    });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const getAFoodController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "id is require"));

    const food = await foodService.getAFoodService(id);
    if (!food) return next(new AppError(404, "Foods not  Found"));
    res.status(200).json({
      success: true,
      message: "get a food data",
      data: food,
    });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const updateAFoodController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "id is require"));

    const food = await foodService.updateFoodService(id,req.body);
    if (!food) return next(new AppError(404, "Foods not  Found"));
    res.status(200).json({
      success: true,
      message: "update a food data",
      data: food,
    });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};

const deleteAFoodController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(404, "id is require"));

    const food = await foodService.deleteFoodService(id);
    if (!food) return next(new AppError(404, "Foods not  Found"));
    res.status(200).json({
      success: true,
      message: "delete a food data",
      data: food,
    });
  } catch (err: any) {
    next(
      new AppError(
        err.statusCode || 500,
        err.message || "Internal Server Error"
      )
    );
  }
};


export const foodController = {
    createFoodController,
    getAFoodController,
    getAllFoodController,
    updateAFoodController,
    deleteAFoodController
}