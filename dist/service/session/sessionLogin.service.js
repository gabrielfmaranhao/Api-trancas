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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const errors_1 = require("../../errors/errors");
const sessionLoginService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const adm = { email: process.env.EMAIL_ADM, password: process.env.PASSWORD_ADM };
    if (email !== adm.email) {
        throw new errors_1.AppError(401, "email ou senha inválidos");
    }
    if (password !== adm.password) {
        throw new errors_1.AppError(401, "email ou senha inválidos");
    }
    const token = jsonwebtoken_1.default.sign({ email: adm.email }, process.env.SECRET_KEY, { expiresIn: "24h" });
    return token;
});
exports.default = sessionLoginService;
