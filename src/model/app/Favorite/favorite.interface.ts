import type { ObjectId } from "mongoose";

export interface IFavorite {
  userId: ObjectId;
  foodId: ObjectId;
}
