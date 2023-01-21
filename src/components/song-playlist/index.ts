import { Router } from "express";
import {agregarCancion} from "./controller";

const agregarRouter: Router = Router();

agregarRouter.post("/", agregarCancion);

export default agregarRouter;