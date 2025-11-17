import express from "express";
import { restaurantController } from "./restaurant.controller.js";

const router = express.Router();
router.post('/create-restaurant',restaurantController.createRestaurant)
router.get('/',restaurantController.getAllRestaurants)
router.get('/:id',restaurantController.getRestaurantById)

export const restaurantRouter = router;
