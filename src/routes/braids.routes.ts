import { Router } from "express";
import upload from "../middlewares/ensureUploadMiddlewares";
import { createBraidsController, deleteBraidsController, listBraidsController, updateBraidsController, listClientBraidController } from "../controllers/braids.controller";
import verifySerialization from "../middlewares/serializer.middleware";
import { createBraidsSerializer, updateBraidsSerializer } from "../serializers/braids.serializer";
import authTokenMiddlewares from "../middlewares/ensureIsAdm.middleware";
const braidsRoutes = Router();

braidsRoutes.get("", listBraidsController) // lista todas as Trancas
braidsRoutes.post("", authTokenMiddlewares, upload.single('image'), verifySerialization(createBraidsSerializer), createBraidsController) // cria uma nova tranca 
braidsRoutes.delete("/:id", authTokenMiddlewares, deleteBraidsController) // deleção de trança 
braidsRoutes.patch("/:id", authTokenMiddlewares, upload.single('image'), verifySerialization(updateBraidsSerializer), updateBraidsController) // atualização de tranca
braidsRoutes.get("/:inst", listClientBraidController) // encontrar tranca por instagram de cliente

export default braidsRoutes