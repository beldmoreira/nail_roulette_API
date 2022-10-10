import { Request, Response } from "express";
import * as nailPolishService from "../services/nailPolishService";

export async function createNailPolish(req: Request, res: Response) {
  const nailLacquer = req.body;
  await nailPolishService.insert(nailLacquer);
  res.sendStatus(201);
}

export async function getNailPolishes(req: Request, res: Response) {
  const nailLacquers = await nailPolishService.get();
  res.send(nailLacquers);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const nailLacquer = await nailPolishService.getById(+id);
  res.send(nailLacquer);
}

export async function deleteNailPolish(req: Request, res: Response) {
  const nailPolishId = parseInt(req.params.id);
  if (isNaN(nailPolishId)) {
    res.sendStatus(422);
  }
  await nailPolishService.remove(nailPolishId);
  res.sendStatus(201);
}

export async function getRandom(req: Request, res: Response) {
  const randomNailPolish = await nailPolishService.getRandom();

  res.send(randomNailPolish);
}
