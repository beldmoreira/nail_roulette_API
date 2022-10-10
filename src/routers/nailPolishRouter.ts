import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { nailPolishSchema } from "../schemas/nailPolishSchema";
import {
  getById,
  getNailPolishes,
  deleteNailPolish,
  getRandom,
} from "../controllers/nailPolishController";

const nailPolishRouter = Router();
nailPolishRouter.post("/create", validateSchemaMiddleware(nailPolishSchema));
nailPolishRouter.delete("/nailpolish/:id", deleteNailPolish);
nailPolishRouter.get("/nailpolishes", getNailPolishes);
nailPolishRouter.get("/nailpolish/:id", getById);
nailPolishRouter.get("/random", getRandom);
export default nailPolishRouter;
