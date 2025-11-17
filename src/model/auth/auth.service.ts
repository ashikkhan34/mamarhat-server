import { userModel } from "../app/user/user.model.js";
import type { ILoginData } from "./auth.interface.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authLoginService = async (payload: ILoginData) => {
  const { email, password } = payload;

  const user = await userModel.findOne({ email });
  if (!user) throw new Error("user not found");

  const hashedPassword = await bcrypt.compare(password, user.password);
  if (!hashedPassword) throw new Error("invalid password");

  const token = jwt.sign(
    { id: user.id, email: user.email,role:user.role },
    process.env.JWT_SECRET_TOKEN!,
    { expiresIn: "5d" }
  );
  return { token, user };
};
