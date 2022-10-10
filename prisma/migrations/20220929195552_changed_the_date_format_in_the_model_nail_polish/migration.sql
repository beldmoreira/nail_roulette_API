/*
  Warnings:

  - The `expiration_date` column on the `nailPolishes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "nailPolishes" DROP COLUMN "expiration_date",
ADD COLUMN     "expiration_date" VARCHAR(8);
