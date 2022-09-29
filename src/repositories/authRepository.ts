import { prisma } from "../config/database";
import { CreateUserData } from "../types/CreateUserDataType";

export async function createUser(user: CreateUserData) {
  return prisma.user.create({ data: user });
}

export async function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function findById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}
