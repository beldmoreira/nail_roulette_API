/*
  Warnings:

  - Added the required column `finish` to the `nailPolishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nailPolishes" ADD COLUMN     "finish" TEXT NOT NULL;
