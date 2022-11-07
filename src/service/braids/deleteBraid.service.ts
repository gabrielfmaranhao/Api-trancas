import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import Braids from "../../entities/braids.entities";

const deleteBraidsService = async (id:string) => {
    const braidsRepository = AppDataSource.getRepository(Braids);
    const findBraid = await braidsRepository.findOneBy({id});
    if (!findBraid) {
        throw new AppError(401,"Tranca não encontrada")
    }
    await braidsRepository.delete({id: findBraid.id});
}

export default deleteBraidsService