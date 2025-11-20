import type { NextFunction, Request, Response } from "express";
import {
  addToCartService,
  getCartByUserService,
  removeCartItemService,
  clearCartService,
} from "./cart.service.js";
import AppError from "../../helper/AppError.js";

// Add to cart
export const addToCart = async (req: Request, res: Response) => {
  try {
    const result = await addToCartService(req.body);
    res.status(200).json({ success: true, data: result });
  } catch (err:any) {
  console.log("Add to cart service error:", err);
  res.status(500).json({ success: false, error: err.message || err });
}
};

// Get cart for user
export const getCartByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return next(new AppError(404, "userId is required"));
    }
    const result = await getCartByUserService(userId);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

// Remove single item
export const removeCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const itemId = req.params.itemId;
    if (!itemId) {
      return next(new AppError(404, "userId is required"));
    }
    const result = await removeCartItemService(itemId);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

// Clear all cart items
export const clearCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return next(new AppError(404, "userId is required"));
    }
    await clearCartService(userId);
    res.status(200).json({ success: true, message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};
