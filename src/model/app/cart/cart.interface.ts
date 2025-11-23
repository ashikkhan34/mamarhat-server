import type { ObjectId } from "mongoose";

export interface ICartItem {
  userId?: ObjectId;
  foodId:ObjectId;
  quantity: number;
}
