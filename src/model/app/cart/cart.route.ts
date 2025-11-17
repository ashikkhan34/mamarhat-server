import { Router } from "express";
import { addToCart, getUserCart, clearCart } from "./cart.controller.js";

const router = Router();

router.post("/add", addToCart);
router.get("/:userId", getUserCart);
router.delete("/:userId", clearCart);

export const cartRouter = router;
