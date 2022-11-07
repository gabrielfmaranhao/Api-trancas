import { response, Response } from "express";

export class AppError extends Error {
    status: number
    constructor ( status: number, message: string) {
        super()
        this.status = status
        this.message = message
    }
}