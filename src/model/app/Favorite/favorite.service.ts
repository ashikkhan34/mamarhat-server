import { FavoriteModel } from "./favorite.model.js";

export const addFavoriteService = async (userId: string, foodId: string) => {
  return await FavoriteModel.create({ userId, foodId });
};

export const removeFavoriteService = async (userId: string, foodId: string) => {
  return await FavoriteModel.findOneAndDelete({ userId, foodId });
};

export const getFavoritesByUserService = async (userId: string) => {
  return await FavoriteModel.find({ userId }).populate("foodId");
};
