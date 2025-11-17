import type { IUser } from "./user.interface.js";
import { userModel } from "./user.model.js";
import bcrypt from 'bcrypt'

const createUserService = async (payload: IUser) => {
    const hashedPassword = await bcrypt.hash(payload.password,10)
    payload.password = hashedPassword
  return await userModel.create(payload);
};

const getAllUserService = async () => {
  return await userModel.find();
};

const getAUserService = async (id: string) => {
  return await userModel.findById(id);
};

const updateUserService = async (id: string, payload: Partial<IUser>) => {
  return await userModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteUserService = async (id: string) => {
  return await userModel.findByIdAndDelete(id);
};

export const userService = {
  createUserService,
  getAllUserService,
  getAUserService,
  updateUserService,
  deleteUserService,
};
