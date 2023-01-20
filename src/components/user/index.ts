import { Router } from "express";
import { getUser,signUp,login } from "./controller";

const userRouter: Router = Router();

userRouter.get("/",getUser);
userRouter.post("/",signUp);
userRouter.post("/login",login);

export default userRouter;