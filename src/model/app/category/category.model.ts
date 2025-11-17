import { Schema, model } from "mongoose";
import type { ICategory } from "./category.interface.js";

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
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

export const categoryModel = model<ICategory>("Category", categorySchema);
