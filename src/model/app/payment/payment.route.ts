import { Router } from "express";
import { createPayment, confirmPayment } from "./payment.controller.js";

const router = Router();

router.post("/init", createPayment);
router.post("/confirm/:paymentIntent", confirmPayment);

export default router;
