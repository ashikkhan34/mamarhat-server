import type { ObjectId } from "mongoose";

export interface ICartItem {
  userId: ObjectId;
  items: [{ foodId: ObjectId; quantity: Number }];
  totalPrice: Number;
}
