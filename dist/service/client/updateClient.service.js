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
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = require("../../errors/errors");
const cliente_entities_1 = __importDefault(require("../../entities/cliente.entities"));
const updateClientService = (date, id) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(cliente_entities_1.default);
    const { inst, name } = date;
    const findClient = yield clientRepository.findOneBy({ id: id });
    if (!findClient) {
        throw new errors_1.AppError(404, "Client is not exist");
    }
    yield clientRepository.update(id, { name: name ? name : findClient.name, inst: inst ? inst : findClient.inst });
    const client = yield clientRepository.findOneBy({ id });
    return client;
});
exports.default = updateClientService;
