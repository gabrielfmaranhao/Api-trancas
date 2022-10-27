import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import Cliente from "../../entities/cliente.entities";
import { IClientUpdate } from "../../interfaces/client";


const updateClientService = async(date:IClientUpdate, id:string):Promise<Cliente> => {
    const clientRepository =AppDataSource.getRepository(Cliente);
    const {inst, name}:IClientUpdate = date;
    const findClient = await clientRepository.findOneBy({id:id});
    if(!findClient) {
        throw new AppError(404,"Client is not exist")
    }
    await clientRepository.update(id,{name: name ? name : findClient.name, inst: inst ? inst: findClient.inst});
    const client = await clientRepository.findOneBy({id});
    return client!

}
export default updateClientService