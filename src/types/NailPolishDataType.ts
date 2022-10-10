import { NailPolish } from "@prisma/client";

export type NailPolishData = Omit<NailPolish, "id">;
