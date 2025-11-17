import { Schema, model, Document, Types } from "mongoose";
import type { IFood } from "./foods.interface.js";

const foodSchema = new Schema<IFood>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    isOffer: {
      type: Boolean,
      default: false,
    },

    isFreeDelivery: {
      type: Boolean,
      default: false,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt auto add
  }
);

export const foodsModel =  model<IFood>("Food", foodSchema);
