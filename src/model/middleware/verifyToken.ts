import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import jwt from 'jsonwebtoken'


export const auth = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.token;
    if(!token) return next(new AppError(401,'unauthorize: no token found'))

        try{
            const decoded:any = jwt.verify(token, process.env.JWT_SECRET_TOKEN!);
            (req as any).user = decoded;
            next()
        }catch(err){
            next(new AppError(401,'Invalid or Expired token'))
        }
}