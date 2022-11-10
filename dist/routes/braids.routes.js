"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ensureUploadMiddlewares_1 = __importDefault(require("../middlewares/ensureUploadMiddlewares"));
const braids_controller_1 = require("../controllers/braids.controller");
const serializer_middleware_1 = __importDefault(require("../middlewares/serializer.middleware"));
const braids_serializer_1 = require("../serializers/braids.serializer");
const ensureIsAdm_middleware_1 = __importDefault(require("../middlewares/ensureIsAdm.middleware"));
const braidsRoutes = (0, express_1.Router)();
braidsRoutes.get("", braids_controller_1.listBraidsController); // lista todas as Trancas
braidsRoutes.post("", ensureIsAdm_middleware_1.default, ensureUploadMiddlewares_1.default.single('image'), (0, serializer_middleware_1.default)(braids_serializer_1.createBraidsSerializer), braids_controller_1.createBraidsController); // cria uma nova tranca 
braidsRoutes.delete("/:id", ensureIsAdm_middleware_1.default, braids_controller_1.deleteBraidsController); // deleção de trança 
braidsRoutes.patch("/:id", ensureIsAdm_middleware_1.default, ensureUploadMiddlewares_1.default.single('image'), (0, serializer_middleware_1.default)(braids_serializer_1.updateBraidsSerializer), braids_controller_1.updateBraidsController); // atualização de tranca
braidsRoutes.get("/:insta", braids_controller_1.listClientBraidController); // encontrar tranca por instagram de cliente
exports.default = braidsRoutes;
