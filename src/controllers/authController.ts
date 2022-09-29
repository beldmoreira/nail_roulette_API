import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signIn(req: Request, res: Response) {
  const user = req.body;
  const token = await authService.login(user);
  res.send({ token });
}

export async function signUp(req: Request, res: Response) {
  const user = req.body;
  await authService.createUser(user);
  res.sendStatus(201);
}
