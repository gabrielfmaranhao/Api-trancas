import { Request, Response } from "express";
import { IBraidsRequest, IUpdateBraidRequest } from "../interfaces/braids";
import { AppError } from "../errors/errors";
import createBraidsService from "../service/braids/createBraids.service";
import listBraidsService from "../service/braids/listBraids.service";
import deleteBraidsService from "../service/braids/deleteBraid.service";
import updateBraidsService from "../service/braids/updateBraids.service";
import listClientBraidsService from "../service/braids/listClientBraids.service";

const createBraidsController = async (req: Request, res: Response) => {
    try {
        const {type, price, time, insta}:IBraidsRequest = req.body;
        const image_p = req.file;
        const braid = await createBraidsService({type, price, time, insta, image_p});
        return res.status(200).json(braid);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
} // OK

const updateBraidsController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const data: IUpdateBraidRequest = req.body;
        const image = req.file;
        const braid = await updateBraidsService(id,data,image!);
        return res.status(201).json(braid)
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
} // OK

const listBraidsController = async ( req:Request, res: Response) => {
    const listBraids = await listBraidsService();
    return res.status(201).json(listBraids);
} // OK

const deleteBraidsController = async ( req: Request, res: Response) => {
    try {
        const id : string = req.params.id
        await deleteBraidsService(id);
        return res.status(201).json("Deleção de braid concluida")
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
} // OK

const listClientBraidController = async ( req: Request, res: Response) => {
    try {
        const insta: string = req.params.insta;
        const list = await listClientBraidsService(insta);
        return res.status(201).json(list);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
}

export { createBraidsController, deleteBraidsController, listBraidsController, updateBraidsController, listClientBraidController}