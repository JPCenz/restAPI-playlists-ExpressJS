import { Router } from "express";
import { listarSong, crearSong } from "./controller";

const songRouter: Router = Router();

songRouter.get("/", listarSong);
songRouter.post("/", crearSong);

export default songRouter;