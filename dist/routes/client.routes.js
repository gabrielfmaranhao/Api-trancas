"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const ensureIsAdm_middleware_1 = __importDefault(require("../middlewares/ensureIsAdm.middleware"));
const serializer_middleware_1 = __importDefault(require("../middlewares/serializer.middleware"));
const client_serializer_1 = require("../serializers/client.serializer");
const clientRoutes = (0, express_1.Router)();
clientRoutes.get("", client_controller_1.listClientController); // lista todos os clientes
clientRoutes.get("/:inst", client_controller_1.listClientInstController); // lista o cliente com o instagram requisitado
clientRoutes.post("", ensureIsAdm_middleware_1.default, (0, serializer_middleware_1.default)(client_serializer_1.createClientSerializer), client_controller_1.createClientController); // cria um novo cliente 
clientRoutes.patch("/:id", ensureIsAdm_middleware_1.default, (0, serializer_middleware_1.default)(client_serializer_1.updateClientSerializer), client_controller_1.updateClientController); // atualiza apenas o nome e o instagram
clientRoutes.delete("/:id", ensureIsAdm_middleware_1.default, client_controller_1.deleteClientController); // deleta cliente
exports.default = clientRoutes;
