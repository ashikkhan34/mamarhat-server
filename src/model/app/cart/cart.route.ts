import { Router } from "express";
import { addToCart, clearCart, getCartByUser, removeCartItem } from "./cart.controller.js";

const router = Router();

router.post("/add", addToCart);
router.get("/:userId", getCartByUser);
router.delete("/:userId", clearCart);
router.delete("/item/:itemId", removeCartItem);

export const cartRouter = router;
