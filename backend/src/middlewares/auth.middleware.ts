import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export interface AuthUser{
    id: number,
    role: string
}

declare global{
    namespace Express {
        interface Request {
            user? : AuthUser
        }
    }
}

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const authHeader = req.headers.authorization

        if (!authHeader) {
            res.status(400).json({
                message: "Unauthorized"
            })
        }

        const token = authHeader?.split(' ')[1];

        if (!token) {
            res.status(400).json({
                message: "Token is missing"
            })
        }

        const decoded = await jwt.verify(
            token,
            "my_secreatkey_2026"
        ) as AuthUser

        req.user = decoded

        next()

    } catch (err : any) {
        res.status(500).json({
            message: err.message
        })
    }
}