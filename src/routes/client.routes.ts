import { Router } from "express";
import { createClientController, deleteClientController, listClientController, listClientInstController, updateClientController } from "../controllers/client.controller";
import authTokenMiddlewares from "../middlewares/ensureIsAdm.middleware";

const clientRoutes = Router();

clientRoutes.get("", listClientController) // lista todos os clientes
clientRoutes.get("/:inst", listClientInstController) // lista o cliente com o instagram requisitado
clientRoutes.post("",authTokenMiddlewares ,createClientController) // cria um novo cliente 
clientRoutes.patch("/:id",authTokenMiddlewares ,updateClientController) // atualiza apenas o nome e o instagram
clientRoutes.delete("/:id", authTokenMiddlewares,deleteClientController) // deleta cliente

export default clientRoutes