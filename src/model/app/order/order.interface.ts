import type { ObjectId } from "mongoose";

export interface IOrder {
  userId: ObjectId;
  orderItems: {
    foodId: ObjectId;
    qty: number;
    price: number;
  }[];
  totalAmount: number;
  paymentStatus: "pending" | "paid";
  orderStatus: "processing" | "delivered" | "cancelled";
  address: string;
  createdAt: Date;
}
