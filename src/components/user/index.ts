import { Router } from "express";
import { helloWorld } from "./controller";

const userRouter: Router = Router();

userRouter.get("/", helloWorld);

export default userRouter;