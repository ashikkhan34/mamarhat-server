import type { ObjectId } from "mongoose";

export interface IPayment {
  userId: ObjectId;
  cartId: ObjectId;
  amount: number;
  currency: string;
  status: "pending" | "success" | "failed";
  paymentMethod: "stripe" | "sslcommerz" | "bkash" | "nagad" | "cod";
  paymentIntent?: string;
  createdAt: Date;
}
