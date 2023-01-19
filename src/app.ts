import express, { type Application } from "express";
import { userRouter } from "./components";

const app: Application = express();
//Middleware
app.use(express.json());

//Rutas de la API
app.use("/api/v1/users", userRouter);



//hello world
app.get("/",(req,res)=>{
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})


export default app;
