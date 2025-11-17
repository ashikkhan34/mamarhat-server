import express from "express";
import { userController } from "./user.controller.js";

const router = express.Router();

router.post("/create-user", userController.createUserController);
router.get("/", userController.getAllUserController);
router.get("/:id", userController.getAUserController);
router.put("/:id", userController.updateUserController);
router.delete("/:id", userController.deleteUserController);

export const userRouter = router;
