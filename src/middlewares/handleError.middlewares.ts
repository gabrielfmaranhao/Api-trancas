import { Response, Request, NextFunction  } from "express";
import { AppError } from "../errors/errors";

const handleErrorMiddleware = ( error: Error | AppError, req: Request, res: Response, nex: NextFunction) => {
    if ( error instanceof AppError) {
        return res.status(error.status).json({status: error.status, message: error.message});
    }
    console.error(error);
    return res.status(500).json("Internal Server Error")
};

export default handleErrorMiddleware
