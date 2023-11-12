/*
  Warnings:

  - You are about to drop the column `shortenedUrl` on the `ShortenedUrl` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortenedUrlId]` on the table `ShortenedUrl` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ShortenedUrl_shortenedUrl_key";

-- AlterTable
ALTER TABLE "ShortenedUrl" DROP COLUMN "shortenedUrl",
ADD COLUMN     "shortenedUrlId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShortenedUrl_shortenedUrlId_key" ON "ShortenedUrl"("shortenedUrlId");
