import AppDataSource from "../../data-source";
import Cliente from "../../entities/cliente.entities";
import { AppError } from "../../errors/errors";

const deleteClientService = async (id:string) => {
    const clientRepository = AppDataSource.getRepository(Cliente);
    const findClient = await clientRepository.findOneBy({id});
    if(!findClient) {
        throw new AppError(400,"Client is not exists")
    }
    await clientRepository.delete(findClient)
}

export default deleteClientService