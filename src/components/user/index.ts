import { Router } from "express";
import { getUser,signUp,login ,verifyToken} from "./controller";

const userRouter: Router = Router();

userRouter.get("/",getUser);
userRouter.post("/",signUp);
userRouter.post("/login",login);
userRouter.post("/verify",verifyToken);

export default userRouter;