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
const braids_entities_1 = __importDefault(require("../../entities/braids.entities"));
const cliente_entities_1 = __importDefault(require("../../entities/cliente.entities"));
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = require("../../errors/errors");
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const createBraidsService = ({ insta, price, type, date, time, image_p }) => __awaiter(void 0, void 0, void 0, function* () {
    const braidsRepository = data_source_1.default.getRepository(braids_entities_1.default);
    const clientRepository = data_source_1.default.getRepository(cliente_entities_1.default);
    const clientFind = yield clientRepository.findOneBy({ inst: insta });
    if (!clientFind) {
        throw new errors_1.AppError(400, "Client is not exists");
    }
    const cloudinaryImage = yield cloudinary_1.v2.uploader.upload(image_p.path, (error, result) => result);
    fs_1.default.unlink(image_p.path, (error) => {
        if (error) {
            console.log(error);
        }
    });
    const braid = braidsRepository.create({ date, image_p: cloudinaryImage.url, price, type, time, client: clientFind });
    yield braidsRepository.save(braid);
    return braid;
});
exports.default = createBraidsService;
