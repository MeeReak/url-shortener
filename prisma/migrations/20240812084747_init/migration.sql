-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortUrl" TEXT,
    "click" INTEGER,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);
