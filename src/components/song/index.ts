import { Router } from "express";
import { listarSong, crearSong, getIdSong, listarSongPrivate } from "./controller";

const songRouter: Router = Router();

songRouter.get("/", listarSongPrivate, listarSong);
songRouter.post("/", crearSong);
songRouter.get("/:id",getIdSong);

export default songRouter;