import { Router } from "express";
import { createClientController, deleteClientController, listClientController, listClientInstController, updateClientController } from "../controllers/client.controller";
import authTokenMiddlewares from "../middlewares/ensureIsAdm.middleware";
import verifySerialization from "../middlewares/serializer.middleware";
import { createClientSerializer, updateClientSerializer } from "../serializers/client.serializer";
const clientRoutes = Router();

clientRoutes.get("", authTokenMiddlewares,listClientController) // lista todos os clientes
clientRoutes.get("/:inst", authTokenMiddlewares ,listClientInstController) // lista o cliente com o instagram requisitado
clientRoutes.post("",authTokenMiddlewares, verifySerialization(createClientSerializer), createClientController) // cria um novo cliente 
clientRoutes.patch("/:id",authTokenMiddlewares, verifySerialization(updateClientSerializer), updateClientController) // atualiza apenas o nome e o instagram
clientRoutes.delete("/:id", authTokenMiddlewares,deleteClientController) // deleta cliente

export default clientRoutes