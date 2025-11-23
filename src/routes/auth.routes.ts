import NextAuth from "next-auth";
import type { NextAuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import { userService } from "../model/app/user/user.service.js";
import type { NextApiRequest, NextApiResponse } from "next";

if (!process.env.NEXTAUTH_SECRET) throw new Error("NEXTAUTH_SECRET missing");
if (!process.env.MONGODB_URL) throw new Error("MONGODB_URL missing");

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // guaranteed string
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) return false;

      await mongoose.connect(process.env.MONGODB_URL!);

      const existingUser = await userService.getAUserService(user.email);

      if (!existingUser) {
        await userService.createUserService({
          name: user.name || "No Name",
          email: user.email,
          photoURL: user.image,
          provider: account?.provider || "unknown",
          role: "user",
        });
      }
      return true;
    },
    async session({ session }: { session: Session; user?: User }) {
      if (!session.user?.email) return session;

      await connectDB();
      const dbUser = await userService.getAUserServiceByEmail(session.user.email);

      if (dbUser) {
        session.user._id = dbUser._id.toString();
        session.user.role = dbUser.role;
      }

      return session;
    },
  },
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export { authHandler };
