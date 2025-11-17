import { Schema, model, Types } from "mongoose";
import type { IReview } from "./review.interface.js";

const reviewSchema = new Schema<IReview>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    foodId: {
      type: Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export const reviewModel = model<IReview>("Review", reviewSchema);
