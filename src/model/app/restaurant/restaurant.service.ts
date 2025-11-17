import { restaurantModel } from "./restaurant.model.js";
import type { IRestaurant } from "./restaurant.interface.js";

 const createRestaurantService = async (payload: IRestaurant) => {
  return await restaurantModel.create(payload);
};

 const getAllRestaurantsService = async () => {
  return await restaurantModel.find();
};

 const getRestaurantByIdService = async (id: string) => {
  return await restaurantModel.findById(id);
};

 const updateRestaurantService = async (
  id: string,
  payload: Partial<IRestaurant>
) => {
  return await restaurantModel.findByIdAndUpdate(id, payload, { new: true });
};

 const deleteRestaurantService = async (id: string) => {
  return await restaurantModel.findByIdAndDelete(id);
};

export const restaurantService = {
    createRestaurantService,
    getAllRestaurantsService,
    getRestaurantByIdService,
    updateRestaurantService,
    deleteRestaurantService
}
