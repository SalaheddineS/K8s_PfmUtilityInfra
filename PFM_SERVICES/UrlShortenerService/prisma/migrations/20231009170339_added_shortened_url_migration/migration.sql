-- CreateTable
CREATE TABLE "ShortenedUrl" (
    "id" SERIAL NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortenedUrl" SERIAL NOT NULL,

    CONSTRAINT "ShortenedUrl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortenedUrl_shortenedUrl_key" ON "ShortenedUrl"("shortenedUrl");
