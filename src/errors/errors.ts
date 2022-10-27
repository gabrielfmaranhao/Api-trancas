import { response, Response } from "express";

export class AppError extends Error {
    status: number
    constructor ( status: number, message: string) {
        super()
        this.status = status
        this.message = message
    }
}

export const handleError = ( err: AppError, res: Response) => {
    const { message, status } = err;
    return response.status(status).json({ status: status, message: message});
}