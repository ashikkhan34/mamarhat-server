import { Schema, model } from "mongoose";
import type { IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    photoURL: {
      type: String,
      required: false,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export const userModel = model<IUser>("User", userSchema);
