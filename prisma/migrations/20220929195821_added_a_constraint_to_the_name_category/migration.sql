/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `nailPolishes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "nailPolishes_name_key" ON "nailPolishes"("name");
