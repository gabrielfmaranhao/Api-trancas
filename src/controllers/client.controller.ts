import { Request, Response } from "express";
import { AppError } from "../errors/errors";
import { IClientRequest, IClientUpdate } from "../interfaces/client";
import createClientService from "../service/client/createClient.service";
import listClientService from "../service/client/listClient.service";
import listClientInstService from "../service/client/listClientInst.service";
import updateClientService from "../service/client/updateClient.service";
import deleteClientService from "../service/client/deleteClient.service";

const createClientController = async ( req: Request, res: Response ) => { 
    try {
        const {name, inst}: IClientRequest = req.body;
        const create = await createClientService(name, inst);
        return res.status(201).json(create);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
} //OK

const listClientController = async ( req: Request, res: Response ) => {
    try {
        const list = await listClientService()
        return res.status(200).json(list);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
}//OK

const listClientInstController =async (req:Request, res: Response) => {
    try {
        const inst: string = req.params.inst;
        const client = await listClientInstService(inst);
        return res.status(201).json(client)
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
}// ok
const updateClientController = async ( req:Request, res: Response ) => {
    try {
        const date:IClientUpdate = req.body;
        const id:string = req.params.id
        const client = await updateClientService(date,id)
        return res.status(201).json(client);
        
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
} //ok

const deleteClientController = async ( req: Request, res: Response ) => {
    try {
        const id: string = req.params.id
        await deleteClientService(id);
        return res.status(200).json({message:"client excluido"})
        
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({status: error.status, message: error.message})
        }
    }
    
}

export { createClientController, listClientController, listClientInstController, updateClientController, deleteClientController }