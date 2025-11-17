import type { IOrder } from "./order.interface.js";
import { orderModel } from "./order.model.js";

const createOrderService = async (payload: IOrder) => {
  return await orderModel.create(payload);
};

const getAllOrderService = async () => {
  return await orderModel
    .find()
    .populate("userId")
    .populate("orderItems.foodId");
};

const getAOrderService = async (id: string) => {
  return await orderModel
    .findById(id)
    .populate("userId")
    .populate("orderItems.foodId");
};

const updateOrderService = async (id: string, payload: Partial<IOrder>) => {
  return await orderModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteOrderService = async (id: string) => {
  return await orderModel.findByIdAndDelete(id);
};

export const orderService = {
  createOrderService,
  getAllOrderService,
  getAOrderService,
  updateOrderService,
  deleteOrderService,
};
