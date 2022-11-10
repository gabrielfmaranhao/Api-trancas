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
const cliente_entities_1 = __importDefault(require("../../entities/cliente.entities"));
const braids_entities_1 = __importDefault(require("../../entities/braids.entities"));
const errors_1 = require("../../errors/errors");
const listClientBraidsService = (insta) => __awaiter(void 0, void 0, void 0, function* () {
    const braidsRepository = data_source_1.default.getRepository(braids_entities_1.default);
    const clienteRepository = data_source_1.default.getRepository(cliente_entities_1.default);
    const findClient = yield clienteRepository.findOneBy({ inst: insta });
    if (!findClient) {
        throw new errors_1.AppError(400, "Cliente não existe");
    }
    const listBraids = yield braidsRepository.find({ where: { client: findClient } });
    return listBraids;
});
exports.default = listClientBraidsService;
