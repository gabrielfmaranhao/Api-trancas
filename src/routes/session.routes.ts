import { Router } from "express";
import sessionLoginController from "../controllers/sessrion.controller";

const sessionRoutes = Router();

sessionRoutes.post("", sessionLoginController);

export default sessionRoutes