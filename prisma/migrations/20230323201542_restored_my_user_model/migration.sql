/*
  Warnings:

  - You are about to drop the column `expiration_date` on the `nailPolishes` table. All the data in the column will be lost.
  - Made the column `last_name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "nailPolishes" DROP COLUMN "expiration_date",
ADD COLUMN     "expirationDate" VARCHAR(8);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "last_name" SET DEFAULT '';
