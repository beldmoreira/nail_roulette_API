import { Router } from "express";
import authRouter from "./authRouter";
import nailPolishRouter from "./nailPolishRouter";

const router = Router();
router.use(authRouter);
router.use(nailPolishRouter);
export default router;
