-- CreateTable
CREATE TABLE "nailPolishes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "shade" TEXT NOT NULL,
    "expiration_date" DATE NOT NULL,

    CONSTRAINT "nailPolishes_pkey" PRIMARY KEY ("id")
);
