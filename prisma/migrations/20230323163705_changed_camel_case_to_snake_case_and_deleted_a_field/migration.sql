/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `nailPolishes` table. All the data in the column will be lost.
  - You are about to drop the column `confirmPassword` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "nailPolishes" DROP COLUMN "expirationDate",
ADD COLUMN     "expiration_date" VARCHAR(8);

-- AlterTable
ALTER TABLE "users" DROP COLUMN "confirmPassword",
DROP COLUMN "lastName",
ADD COLUMN     "last_name" TEXT;
