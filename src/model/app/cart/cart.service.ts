import { cartModel } from "./cart.model.js";
import type { ICartItem } from "./cart.interface.js";
import mongoose from "mongoose";

// Add item to cart
export const addToCartService = async (payload: any) => {
  let { userId, foodId, quantity } = payload;

  // FIX: Normalize userId if it's an object
  if (typeof userId === "object" && userId.id) {
    userId = userId.id;
  }

  // Basic validation
  if (!userId || !foodId || !quantity) {
    throw new Error("Missing required fields");
  }

  // Check if valid ObjectIds
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid userId");
  }
  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    throw new Error("Invalid foodId");
  }

  // Item exists?
  const existingItem = await cartModel.findOne({ userId, foodId });

  if (existingItem) {
    existingItem.quantity += quantity;
    return await existingItem.save();
  }

  // Create new item
  return await cartModel.create({
    userId,
    foodId,
    quantity,
  });
};



// Get all cart items for user
export const getCartByUserService = async (userId: string) => {
  return await cartModel.find({ userId }).populate("foodId");
};

// Remove single item
export const removeCartItemService = async (itemId: string) => {
  return await cartModel.findByIdAndDelete(itemId);
};

// Clear all cart items for a user
export const clearCartService = async (userId: string) => {
  return await cartModel.deleteMany({ userId });
};
