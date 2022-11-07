import Braids from "../../entities/braids.entities";
import Cliente from "../../entities/cliente.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import { IBraidsRequest, IBraidsResponse } from "../../interfaces/braids";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


const createBraidsService = async ({insta, price, type, date, time, image_p}:any) => {
    const braidsRepository = AppDataSource.getRepository(Braids);
    const clientRepository = AppDataSource.getRepository(Cliente);
    const clientFind = await clientRepository.findOneBy({inst: insta});
    if(!clientFind) {
        throw new AppError(400,"Client is not exists")
    }
    const cloudinaryImage = await cloudinary.uploader.upload(image_p.path, (error :any, result: any)=> result);
    fs.unlink(image_p.path, (error) => {
        if(error) {
            console.log(error)
        }
    });
    const braid = braidsRepository.create({date, image_p: cloudinaryImage.url, price, type, time,client:clientFind});
    await braidsRepository.save(braid)
    return braid
}

export default createBraidsService