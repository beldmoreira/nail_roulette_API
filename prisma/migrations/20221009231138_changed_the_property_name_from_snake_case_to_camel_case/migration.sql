/*
  Warnings:

  - You are about to drop the column `expiration_date` on the `nailPolishes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "nailPolishes" DROP COLUMN "expiration_date",
ADD COLUMN     "expirationDate" VARCHAR(8);
