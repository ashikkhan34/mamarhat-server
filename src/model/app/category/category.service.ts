import type { ICategory } from "./category.interface.js";
import { categoryModel } from "./category.model.js";

const createCategoryService = async (payload: ICategory) => {
  const category = await categoryModel.create(payload);
  return category;
};

const getAllCategoryService = async () => {
  return await categoryModel.find();
};

const getACategoryService = async (id: string) => {
  return await categoryModel.findById(id);
};

const updateCategoryService = async (id: string, payload: Partial<ICategory>) => {
  return await categoryModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteCategoryService = async (id: string) => {
  return await categoryModel.findByIdAndDelete(id);
};

export const categoryService = {
  createCategoryService,
  getAllCategoryService,
  getACategoryService,
  updateCategoryService,
  deleteCategoryService,
};
