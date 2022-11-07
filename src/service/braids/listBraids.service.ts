import AppDataSource from "../../data-source";
import Braids from "../../entities/braids.entities";
import { AppError } from "../../errors/errors";

const listBraidsService = async ():Promise<Braids[]> => {
    const braidsRepository = AppDataSource.getRepository(Braids);
    const list = braidsRepository.find({relations: {client:true}});
    return list
}

export default listBraidsService