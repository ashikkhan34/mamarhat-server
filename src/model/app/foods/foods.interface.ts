import type { Types } from "mongoose";

export interface IFood{
  title: String,
  description: String,
  image: String,
  price: number,
  oldPrice: number,      // offer price-এর জন্য
  discount: number,      // % discount
  isTrending: Boolean,   // Trending food
  isOffer: Boolean,      // Offer section
  isFreeDelivery: Boolean, // Free delivery badge
  category: Types.ObjectId,
  rating: number,
  createdAt: Date
}

