import type { ObjectId } from "mongoose";

export interface IPayment {
  userId: ObjectId;
  orderId: ObjectId;
  amount: number;
  currency: string;
  status: "pending" | "success" | "failed";
  paymentMethod: "stripe" | "sslcommerz" | "bkash" | "nagad" | "cod";
  transactionId?: string;
  createdAt: Date;
}
