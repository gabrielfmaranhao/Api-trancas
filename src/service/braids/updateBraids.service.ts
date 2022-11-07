import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import Braids from "../../entities/braids.entities";
import Cliente from "../../entities/cliente.entities";
import { IUpdateBraidRequest } from "../../interfaces/braids";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

const updateBraidsService = async (id:string, data:IUpdateBraidRequest, image: Express.Multer.File ):Promise<Braids> => {
    const braidsRepository = AppDataSource.getRepository(Braids);
    const findBraid = await braidsRepository.findOneBy({id});
    if(!findBraid) {
        throw new AppError(400, "Trança não encontrada");
    }
    const cloudinaryImage = await cloudinary.uploader.upload(image?.path, (error: Error, result: any)=> result)
    fs.unlink(image.path, (error) => {
        if(error) {
            console.log(error)
        }
    });
    await braidsRepository.update(id,{...data, image_p: cloudinaryImage ? cloudinaryImage.url: findBraid.image_p});
    const braid = await braidsRepository.findOneBy({id});
    return braid!

}

export default updateBraidsService