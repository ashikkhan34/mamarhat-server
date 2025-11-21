import { Router } from "express";
import { addFavorite, getUserFavorites, removeFavorite } from "./favorite.controller.js";

const router = Router();

router.post("/add", addFavorite);
router.post("/remove", removeFavorite);
router.get("/:userId", getUserFavorites);

export const favoriteRouter =  router;
