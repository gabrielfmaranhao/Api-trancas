import { Router } from "express";
import { createClientController, deleteClientController, listClientController, listClientInstController, updateClientController } from "../controllers/client.controller";

const clientRoutes = Router();

clientRoutes.get("", listClientController) // lista todos os clientes
clientRoutes.get("/:inst", listClientInstController) // lista o cliente com o instagram requisitado
clientRoutes.post("", createClientController) // cria um novo cliente 
clientRoutes.patch("/:id", updateClientController) // atualiza apenas o nome e o instagram
clientRoutes.delete("/:id", deleteClientController) // deleta cliente

export default clientRoutes