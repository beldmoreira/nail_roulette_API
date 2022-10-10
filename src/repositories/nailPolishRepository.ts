import { prisma } from "../config/database";
import { NailPolishData } from "../types/NailPolishDataType";

export async function create(createNailPolishData: NailPolishData) {
  await prisma.nailPolish.create({
    data: createNailPolishData,
  });
}

export async function findById(id: number) {
  return prisma.nailPolish.findUnique({
    where: { id },
  });
}

export async function findByName(name: string) {
  return prisma.nailPolish.findUnique({
    where: { name },
  });
}

export async function findAll() {
  return prisma.nailPolish.findMany();
}
export async function remove(id: number) {
  await prisma.nailPolish.delete({
    where: { id },
  });
}
