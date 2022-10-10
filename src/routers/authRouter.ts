import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { registrationSchema, loginSchema } from "../schemas/authSchema";

const authRouter = Router();
authRouter.post(
  "/signup",
  validateSchemaMiddleware(registrationSchema),
  signUp
);
authRouter.post("/login", validateSchemaMiddleware(loginSchema), signIn);
export default authRouter;
