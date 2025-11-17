import express from 'express'
import { foodController } from './foods.controller.js'

const router = express.Router()

router.post('/create-food',foodController.createFoodController),
router.get('/',foodController.getAllFoodController)
router.get('/:id',foodController.getAFoodController)
router.put('/:id',foodController.updateAFoodController)
router.delete('/:id',foodController.deleteAFoodController)

export const foodRouter = router;