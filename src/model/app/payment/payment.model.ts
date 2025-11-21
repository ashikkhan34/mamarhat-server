import { Schema, model } from "mongoose";
import type { IPayment } from "./payment.interface.js";

const paymentSchema = new Schema<IPayment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "usd",
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    paymentMethod: {
      type: String,
      enum: ["stripe", "sslcommerz", "bkash", "nagad", "cod"],
      required: true,
    },

    paymentIntent: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const paymentModel = model<IPayment>("Payment", paymentSchema);
