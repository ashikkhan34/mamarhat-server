

import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import { authLoginService } from "./auth.service.js";

export const authLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user, token } = await authLoginService(req.body);

    // 🍪 JWT cookie তে set করা
    res.cookie("token", token, {
      httpOnly: true, // JS থেকে access করা যাবে না
      secure: process.env.NODE_ENV === "development", // শুধুমাত্র HTTPS
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24, // 1 দিন
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user, // user info return করা হলো
    });
  } catch (error: any) {
    next(new AppError(400, error.message || "Bad request"));
  }
};

export const logoutController = (req: Request, res: Response) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // cookie immediately expire
    secure: process.env.NODE_ENV === "development",
    sameSite: "strict",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
