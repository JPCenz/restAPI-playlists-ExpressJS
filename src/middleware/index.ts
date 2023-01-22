import { getBearerToken,verifyJwt } from "../components/user/utils/auth";
import type { NextFunction, Request, Response } from "express";

export const jwtAuthentication = async (req: Request, res: Response,next:NextFunction): Promise<any> => {
    const authHeader: string = req.headers['authorization'] ?? "";
    const token = getBearerToken(authHeader);
    const payload  = verifyJwt(token);
    console.log("MIDDLEWARE")
    if (!payload) {
        return res.status(403).json({
            error: "no autorizado"
        })
    };
    return next()
};

export const notfoundResponse = async (req: Request, res: Response,next:NextFunction): Promise<any> => {

    return res.status(404).json({
        message:"not found"
    })
};