import { Router } from "express";
import { listarSong, crearSong, getIdSong } from "./controller";

const songRouter: Router = Router();

songRouter.get("/", listarSong);
songRouter.post("/", crearSong);
songRouter.get("/:id",getIdSong);

export default songRouter;