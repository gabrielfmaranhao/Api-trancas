"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors/errors");
const handleErrorMiddleware = (error, req, res, nex) => {
    if (error instanceof errors_1.AppError) {
        return res.status(error.status).json({ status: error.status, message: error.message });
    }
    console.error(error);
    return res.status(500).json("Internal Server Error");
};
exports.default = handleErrorMiddleware;
