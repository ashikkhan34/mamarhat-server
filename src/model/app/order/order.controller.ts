import type { Request, Response, NextFunction } from "express";
import { orderService } from "./order.service.js";
import AppError from "../../helper/AppError.js";

const createOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderService.createOrderService(req.body);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAllOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderService.getAllOrderService();

    res.status(200).json({
      success: true,
      message: "Get all orders",
      data: orders,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const getAOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) return next(new AppError(404, "Order ID is required"));

    const order = await orderService.getAOrderService(id);

    if (!order) return next(new AppError(404, "Order not found"));

    res.status(200).json({
      success: true,
      message: "Get single order",
      data: order,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const updateOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) return next(new AppError(404, "Order ID is required"));

    const updated = await orderService.updateOrderService(id, req.body);

    if (!updated) return next(new AppError(404, "Order not found"));

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: updated,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

const deleteOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) return next(new AppError(404, "Order ID is required"));

    const deleted = await orderService.deleteOrderService(id);

    if (!deleted) return next(new AppError(404, "Order not found"));

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      data: deleted,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal Server Error"));
  }
};

export const orderController = {
  createOrderController,
  getAllOrderController,
  getAOrderController,
  updateOrderController,
  deleteOrderController,
};
