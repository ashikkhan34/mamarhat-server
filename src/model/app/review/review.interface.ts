import type { ObjectId } from "mongoose";


export interface IReview{
  userId: ObjectId,
  foodId: ObjectId,
  rating: Number,
  comment: String,
  createdAt: Date


}