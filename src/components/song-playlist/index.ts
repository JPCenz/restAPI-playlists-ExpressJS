import { Router } from "express";
import {agregarCancion} from "./controller";
import { jwtAuthentication } from "../../middleware";

const agregarRouter: Router = Router();

agregarRouter.post("/",agregarCancion);

export default agregarRouter;