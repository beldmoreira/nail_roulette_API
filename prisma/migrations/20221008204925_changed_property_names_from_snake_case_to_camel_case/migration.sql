/*
  Warnings:

  - You are about to drop the column `confirm_password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `users` table. All the data in the column will be lost.
  - Added the required column `confirmPassword` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "confirm_password",
DROP COLUMN "last_name",
ADD COLUMN     "confirmPassword" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;
