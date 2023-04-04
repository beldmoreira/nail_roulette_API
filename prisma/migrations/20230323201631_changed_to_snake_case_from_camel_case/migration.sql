/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `nailPolishes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "nailPolishes" DROP COLUMN "expirationDate",
ADD COLUMN     "expiration_date" VARCHAR(8);
