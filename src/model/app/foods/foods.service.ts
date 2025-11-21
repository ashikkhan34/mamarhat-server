import type { IFood } from "./foods.interface.js";
import { foodsModel } from "./foods.model.js";


const createFoodService = async (payload:IFood) =>{
    const createFood = await foodsModel.create(payload)
    return createFood;
}

const getAllFoodService = async ()=>{
    return await foodsModel.find()
    .populate('category')

}

const getAFoodService = async(id:string)=>{
    return await foodsModel.findById(id)
    .populate('category')
}

const updateFoodService = async (id:string, payload:Partial<IFood>) =>{
    return await foodsModel.findByIdAndUpdate(id,payload,{new:true})
}

const deleteFoodService = async (id:string) =>{
    return await foodsModel.findByIdAndDelete(id)
}

export const foodService = {
    createFoodService,
    getAFoodService,
    getAllFoodService,
    updateFoodService,
    deleteFoodService
}

//i  