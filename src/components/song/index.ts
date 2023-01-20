import { Router } from "express";
import { listarSong, crearSong, getIdPlaylist } from "./controller";

const songRouter: Router = Router();

songRouter.get("/", listarSong);
songRouter.post("/", crearSong);
songRouter.get("/:id",getIdPlaylist);

export default songRouter;