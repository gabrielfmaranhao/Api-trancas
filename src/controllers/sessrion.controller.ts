import { Request, Response } from "express";
import { AppError } from "../errors/errors";
import { IRequestLogin } from "../interfaces/session";
import sessionLoginService from "../service/session/sessionLogin.service";
const sessionLoginController = async (req: Request, res:Response) => {
    try {
        const {email, password}: IRequestLogin = req.body;
        const token = await sessionLoginService({email, password});
        return res.status(200).json({token: token})
    } catch (error) {
        if ( error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message});
        }
    }
}
export default sessionLoginController