import { Router } from "express";
import {getPlaylist,postPlaylist,getIdPlaylist} from "./controller";

const playlistRouter: Router = Router();

playlistRouter.get("/",getPlaylist);
playlistRouter.post("/",postPlaylist);
playlistRouter.get("/:id",getIdPlaylist);

export default playlistRouter;
