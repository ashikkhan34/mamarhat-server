import type { IReview } from "./review.interface.js";
import { reviewModel } from "./review.model.js";

const createReviewService = async (payload: IReview) => {
  return await reviewModel.create(payload);
};

const getAllReviewService = async () => {
  return await reviewModel.find()
  .populate("userId")
  .populate("foodId");
};

const getAReviewService = async (id: string) => {
  return await reviewModel.findById(id)
  .populate("userId")
  .populate("foodId");
};

const updateReviewService = async (id: string, payload: Partial<IReview>) => {
  return await reviewModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteReviewService = async (id: string) => {
  return await reviewModel.findByIdAndDelete(id);
};

export const reviewService = {
  createReviewService,
  getAllReviewService,
  getAReviewService,
  updateReviewService,
  deleteReviewService,
};
