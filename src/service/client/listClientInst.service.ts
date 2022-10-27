import AppDataSource from "../../data-source";
import Cliente from "../../entities/cliente.entities";
import { AppError } from "../../errors/errors";


const listClientInstService = async (inst:string) :Promise<Cliente> => {
    const clientRepository = AppDataSource.getRepository(Cliente);
    const clientFind = await clientRepository.findOneBy({inst:inst});
    if(!clientFind) {
        throw new AppError(402,"Client is not exist")
    }
    return clientFind
}
export default listClientInstService