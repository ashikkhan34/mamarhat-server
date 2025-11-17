import type { ICartItem } from "./cart.interface.js";
import { cartModel } from "./cart.model.js";


// Create or Update Cart
export const addToCartService = async (payload: ICartItem) => {
  const existingCart = await cartModel.findOne({ userId: payload.userId });

  if (existingCart) {
    existingCart.items = payload.items;
    existingCart.totalPrice = payload.totalPrice;
    return await existingCart.save();
  }

  return await cartModel.create(payload);
};


// Get user cart
export const getCartByUserService = async (userId: string) => {
  return await cartModel
    .findOne({ userId })
    .populate("items.foodId")
    .populate("userId");
};


// Clear cart
export const clearCartService = async (userId: string) => {
  return await cartModel.deleteOne({ userId });
};
