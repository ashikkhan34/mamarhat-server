import { Schema, model, Types } from "mongoose";
import type { IOrder } from "./order.interface.js";

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: [
      {
        foodId: {
          type: Schema.Types.ObjectId,
          ref: "Food",
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    orderStatus: {
      type: String,
      enum: ["processing", "delivered", "cancelled"],
      default: "processing",
    },

    address: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export const orderModel = model<IOrder>("Order", orderSchema);
