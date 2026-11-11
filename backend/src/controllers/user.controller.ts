import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const signUp= async(req: Request, res: Response) => {
    try {
        const {name, email, password, mobile} = req.body;

        if(!name || !email || !password || !mobile) {
            return res.status(400).json({ message: "Name, email, mobile, password are required"});
        }

        const result = await userService.createUser(req.body);
        return res.status(201).json({ message: "User registered Sucessfully", data: result});
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
};