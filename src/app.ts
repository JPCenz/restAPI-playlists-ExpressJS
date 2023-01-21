import express, { type Application } from "express";
import { userRouter, songRouter , playlistRouter , agregarRouter } from "./components";

const app: Application = express();
//Middleware
app.use(express.json());

//Rutas de la API
app.use("/api/v1/users", userRouter);
app.use("/api/v1/songs", songRouter);
app.use("/api/v1/playlists", playlistRouter);
app.use("/api/v1/song-playlist", agregarRouter);



//hello world
app.get("/",(req,res)=>{
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})


export default app;
