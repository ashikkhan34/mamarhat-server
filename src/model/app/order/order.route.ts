import express from "express";
import { orderController } from "./order.controller.js";

const router = express.Router();

router.post("/create-order", orderController.createOrderController);
router.get("/", orderController.getAllOrderController);
router.get("/:id", orderController.getAOrderController);
router.put("/:id", orderController.updateOrderController);
router.delete("/:id", orderController.deleteOrderController);

export const orderRouter = router;
