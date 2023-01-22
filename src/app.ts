import express, { type Application } from "express";
import { userRouter, songRouter , playlistRouter , agregarRouter } from "./components";
import { notfoundResponse } from "./middleware";

const app: Application = express();
//Middleware
app.use(express.json());

//Rutas de la API
app.use("/api/v1/users", userRouter);
app.use("/api/v1/songs", songRouter);
app.use("/api/v1/playlists", playlistRouter);
app.use("/api/v1/song-playlist", agregarRouter);


app.use(notfoundResponse)



export default app;
