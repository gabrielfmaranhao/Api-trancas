"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const authTokenMiddlewares = (req, res, nex) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: 401, message: "Invalid token" });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decode) => {
        if (error) {
            return res.status(401).json({ status: 401, message: "Invalid token" });
        }
        return nex();
    });
};
exports.default = authTokenMiddlewares;
