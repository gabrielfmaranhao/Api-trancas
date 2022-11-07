import AppDataSource from "../../data-source";
import Cliente from "../../entities/cliente.entities";
import Braids from "../../entities/braids.entities";
import { AppError } from "../../errors/errors";

const listClientBraidsService = async (insta:string):Promise<Braids[]> => {
    const braidsRepository = AppDataSource.getRepository(Braids);
    const clienteRepository = AppDataSource.getRepository(Cliente);
    const findClient = await clienteRepository.findOneBy({inst: insta});
    if(!findClient) {
        throw  new AppError(400,"Cliente não existe");
    }
    const listBraids = await braidsRepository.find({where:{client:findClient}});
    return listBraids
}

export default listClientBraidsService