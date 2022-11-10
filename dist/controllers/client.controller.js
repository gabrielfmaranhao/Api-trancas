"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientController = exports.updateClientController = exports.listClientInstController = exports.listClientController = exports.createClientController = void 0;
const errors_1 = require("../errors/errors");
const createClient_service_1 = __importDefault(require("../service/client/createClient.service"));
const listClient_service_1 = __importDefault(require("../service/client/listClient.service"));
const listClientInst_service_1 = __importDefault(require("../service/client/listClientInst.service"));
const updateClient_service_1 = __importDefault(require("../service/client/updateClient.service"));
const deleteClient_service_1 = __importDefault(require("../service/client/deleteClient.service"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, inst } = req.body;
        const create = yield (0, createClient_service_1.default)(name, inst);
        return res.status(200).json(create);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
});
exports.createClientController = createClientController;
const listClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield (0, listClient_service_1.default)();
        return res.status(201).json(list);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
}); //ok
exports.listClientController = listClientController;
const listClientInstController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inst = req.params.inst;
        const client = yield (0, listClientInst_service_1.default)(inst);
        return res.status(201).json(client);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
}); // ok
exports.listClientInstController = listClientInstController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = req.body;
        const id = req.params.id;
        const client = yield (0, updateClient_service_1.default)(date, id);
        return res.status(200).json(client);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
}); //ok
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, deleteClient_service_1.default)(id);
        return res.status(200).json({ message: "client excluido" });
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
});
exports.deleteClientController = deleteClientController;
