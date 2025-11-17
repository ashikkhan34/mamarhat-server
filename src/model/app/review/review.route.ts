import express from "express";
import { reviewController } from "./review.controller.js";

const router = express.Router();

router.post("/create-review", reviewController.createReviewController);
router.get("/", reviewController.getAllReviewController);
router.get("/:id", reviewController.getAReviewController);
router.put("/:id", reviewController.updateReviewController);
router.delete("/:id", reviewController.deleteReviewController);

export const reviewRouter = router;
