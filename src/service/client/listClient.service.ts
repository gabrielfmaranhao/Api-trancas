import Cliente from "../../entities/cliente.entities";
import AppDataSource from "../../data-source";

const listClientService = async () :Promise<Cliente[]> => {

    const clientRepository = AppDataSource.getRepository(Cliente);
    const clients = await clientRepository.find();
    return clients

}

export default listClientService