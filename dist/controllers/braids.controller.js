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
exports.listClientBraidController = exports.updateBraidsController = exports.listBraidsController = exports.deleteBraidsController = exports.createBraidsController = void 0;
const errors_1 = require("../errors/errors");
const createBraids_service_1 = __importDefault(require("../service/braids/createBraids.service"));
const listBraids_service_1 = __importDefault(require("../service/braids/listBraids.service"));
const deleteBraid_service_1 = __importDefault(require("../service/braids/deleteBraid.service"));
const updateBraids_service_1 = __importDefault(require("../service/braids/updateBraids.service"));
const listClientBraids_service_1 = __importDefault(require("../service/braids/listClientBraids.service"));
const createBraidsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, price, time, insta } = req.body;
        const image_p = req.file;
        const braid = yield (0, createBraids_service_1.default)({ type, price, time, insta, image_p });
        return res.status(200).json(braid);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
}); // OK
exports.createBraidsController = createBraidsController;
const updateBraidsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const image = req.file;
        const braid = yield (0, updateBraids_service_1.default)(id, data, image);
        return res.status(201).json(braid);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
}); // OK
exports.updateBraidsController = updateBraidsController;
const listBraidsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listBraids = yield (0, listBraids_service_1.default)();
    return res.status(201).json(listBraids);
}); // OK
exports.listBraidsController = listBraidsController;
const deleteBraidsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, deleteBraid_service_1.default)(id);
        return res.status(201).json("Deleção de braid concluida");
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
}); // OK
exports.deleteBraidsController = deleteBraidsController;
const listClientBraidController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insta = req.params.insta;
        const list = yield (0, listClientBraids_service_1.default)(insta);
        return res.status(201).json(list);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.status).json({ status: error.status, message: error.message });
        }
    }
});
exports.listClientBraidController = listClientBraidController;
