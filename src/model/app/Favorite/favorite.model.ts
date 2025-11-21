import { Schema, model, Document } from "mongoose";
import type { IFavorite } from "./favorite.interface.js";

const favoriteSchema = new Schema<IFavorite>(
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
  },
  { timestamps: true }
);

// Prevent duplicate favorite
favoriteSchema.index({ userId: 1, foodId: 1 }, { unique: true });

export const FavoriteModel = model<IFavorite>("Favorite", favoriteSchema);
