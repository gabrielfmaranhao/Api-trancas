import Cliente from "../../entities/cliente.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";


const createClientService = async (name :string, inst: string): Promise<Cliente> => {
    const clientRepository = AppDataSource.getRepository(Cliente);
    const clientFind = await clientRepository.findOneBy({inst: inst});
    if(clientFind) {
        throw new AppError(401, "Client is exist")
    }
    const client = clientRepository.create({name, inst});
    await  clientRepository.save(client);
    return client
}

export default createClientService