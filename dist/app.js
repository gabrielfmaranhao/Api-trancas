"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const braids_routes_1 = __importDefault(require("./routes/braids.routes"));
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const session_routes_1 = __importDefault(require("./routes/session.routes"));
const handleError_middlewares_1 = __importDefault(require("./middlewares/handleError.middlewares"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/clientes", client_routes_1.default);
app.use("/trancas", braids_routes_1.default);
app.use("/login", session_routes_1.default);
app.use(handleError_middlewares_1.default);
exports.default = app;
