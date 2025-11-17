
import type { Request, Response } from "express";
import { restaurantService } from "./restaurant.service.js";

 const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await restaurantService.createRestaurantService(
      req.body
    );
    res.status(201).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

 const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await restaurantService.getAllRestaurantsService();
    res.status(200).json({ success: true, data: restaurants });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if(!id){
        return res.status(404).json({
            message:'id is required',
            success:false
        })
    }
    const restaurant = await restaurantService.getRestaurantByIdService(
      id
    );
    if (!restaurant) {
      return res
        .status(404)
        .json({ success: false, message: "Restaurant not found" });
    }
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const restaurantController = {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById
}
