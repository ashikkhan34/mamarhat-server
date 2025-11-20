import type { Request, Response } from "express";
import {
  addToCartService,
  getCartByUserService,
  clearCartService,
} from "./cart.service.js";

export const addToCart = async (req: Request, res: Response) => {
  try {
    const result = await addToCartService(req.body);
    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error });
  }
};

export const getUserCart = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    if(!userId) return res.status(404).json({message:"userId is required"})
    const result = await getCartByUserService(userId);
    res.status(200).json({
      success: true,
      message: "User cart fetched",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const clearCart = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    if(!userId) return res.status(404).json({message:"userId is required"})
    await clearCartService(userId);
    res.status(200).json({
      success: true,
      message: "Cart cleared",
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
