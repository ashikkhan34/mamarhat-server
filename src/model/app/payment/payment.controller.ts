import type { Request, Response } from "express";
import {
  createPaymentService,
  confirmPaymentService,
} from "./payment.service.js";

export const createPayment = async (req: Request, res: Response) => {
  try {
    const result = await createPaymentService(req.body);

    res.status(200).json({
      success: true,
      message: "Payment initiated",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const confirmPayment = async (req: Request, res: Response) => {
  try {
    const { transactionId } = req.params;
    if (!transactionId)
      return res
        .status(404)
        .json({ message: "transactionId is required", success: false });
    const result = await confirmPaymentService(transactionId);

    res.status(200).json({
      success: true,
      message: "Payment successful",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
