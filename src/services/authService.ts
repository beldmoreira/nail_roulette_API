import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository";
import { CreateUserData } from "../types/CreateUserDataType";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils";

dotenv.config({ path: ".env" });

export async function createUser(user: CreateUserData) {
  const email = await authRepository.findByEmail(user.email);
  if (email) {
    throw conflictError();
  }
  const SALT = 12;
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  await authRepository.createUser({ ...user, password: hashedPassword });
}

export async function findById(id: number) {
  const user = await authRepository.findById(id);
  if (!user) {
    throw notFoundError("This user was not found");
  }
  return user;
}

export async function getUser(login: CreateUserData) {
  const user = await authRepository.findByEmail(login.email);
  if (!user) {
    throw unauthorizedError("Invalid credentials");
  }

  const isPasswordCorrect = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordCorrect) {
    throw unauthorizedError("Invalid credentials");
  }
  return user;
}

export async function login(login: CreateUserData) {
  const user = await getUser(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}
