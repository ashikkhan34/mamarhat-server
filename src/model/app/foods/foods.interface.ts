import type { Types } from "mongoose";

export interface IFood{
  title: String,
  description: String,
  image: String,
  price: Number,
  oldPrice: Number,      // offer price-এর জন্য
  discount: Number,      // % discount
  isTrending: Boolean,   // Trending food
  isOffer: Boolean,      // Offer section
  isFreeDelivery: Boolean, // Free delivery badge
  category: Types.ObjectId,
  rating: Number,
  createdAt: Date
}

