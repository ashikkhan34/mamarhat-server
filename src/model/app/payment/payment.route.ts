import { Router } from "express";
import { createPayment, confirmPayment } from "./payment.controller.js";

const router = Router();

router.post("/init", createPayment);
router.post("/confirm/:transactionId", confirmPayment);

export default router;
