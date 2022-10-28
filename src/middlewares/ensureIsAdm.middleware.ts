import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"


const authTokenMiddlewares = (req: Request, res: Response, nex:NextFunction) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({status: 401, message: "Invalid token"})
    }
    token = token.split(" ")[1]
    jwt.verify(token, process.env.SECRET_KEY as string, (error, decode: any) => {
        if(error) {
            return res.status(401).json({ status: 401, message: "Invalid token"})
        }
        return nex()
    })
}

export default authTokenMiddlewares