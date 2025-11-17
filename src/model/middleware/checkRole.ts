import type { NextFunction, Request, Response } from "express"

export const checkRole = (...roles:string[])=>{
    (req:any,res:Response,next:NextFunction)=>{
        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({success:false,message:'unauthorize access'})
        }
        next()
    }
}