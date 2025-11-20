import { Schema, model } from "mongoose";
import type { ICartItem } from "./cart.interface.js";

const cartSchema = new Schema<ICartItem>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        foodId: {
          type: Schema.Types.ObjectId,
          ref: "Food",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const cartModel = model<ICartItem>("Cart", cartSchema);
