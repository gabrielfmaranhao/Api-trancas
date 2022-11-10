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
const cliente_entities_1 = __importDefault(require("../../entities/cliente.entities"));
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = require("../../errors/errors");
const createClientService = (name, inst) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(cliente_entities_1.default);
    const clientFind = yield clientRepository.findOneBy({ inst: inst });
    if (clientFind) {
        throw new errors_1.AppError(401, "Client is exist");
    }
    const client = clientRepository.create({ name, inst });
    yield clientRepository.save(client);
    return client;
});
exports.default = createClientService;
