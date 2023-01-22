import { Router } from "express";
import { listarSong, crearSong, getIdSong, listarSongPrivate } from "./controller";
import { jwtAuthentication } from "../../middleware";
const songRouter: Router = Router();

songRouter.get("/", listarSongPrivate, listarSong);
songRouter.post("/", jwtAuthentication,crearSong);
songRouter.get("/:id",getIdSong);

export default songRouter;