import express from "express";
import { categoryController } from "./category.controller.js";

const router = express.Router();

router.post("/create-category", categoryController.createCategoryController);
router.get("/", categoryController.getAllCategoryController);
router.get("/:id", categoryController.getACategoryController);
router.put("/:id", categoryController.updateCategoryController);
router.delete("/:id", categoryController.deleteCategoryController);

export const categoryRouter = router;
