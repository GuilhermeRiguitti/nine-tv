-- CreateEnum
CREATE TYPE "StatusEnumDb" AS ENUM ('ENABLE', 'DISABLE');

-- CreateTable
CREATE TABLE "tbl_news_category" (
    "id_category" SERIAL NOT NULL,
    "name_category" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(200) NOT NULL,
    "stats" "StatusEnumDb" NOT NULL DEFAULT 'ENABLE',
    "metaTitle" VARCHAR(160),
    "metaDescription" VARCHAR(500),
    "metaKeywords" VARCHAR(500),
    "metaImage" VARCHAR(60),

    CONSTRAINT "tbl_news_category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "tbl_news_subcategory" (
    "id_subcategory" SERIAL NOT NULL,
    "name_subcategory" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "stats" "StatusEnumDb" NOT NULL DEFAULT 'ENABLE',
    "metaTitle" VARCHAR(160),
    "metaDescription" VARCHAR(500),
    "metaKeywords" VARCHAR(500),
    "metaImage" VARCHAR(60),
    "id_category" INTEGER NOT NULL,

    CONSTRAINT "tbl_news_subcategory_pkey" PRIMARY KEY ("id_subcategory")
);

-- CreateTable
CREATE TABLE "tbl_news" (
    "id_news" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "subtitle" VARCHAR(200) NOT NULL,
    "text" TEXT NOT NULL,
    "autor" VARCHAR(100) NOT NULL,
    "font" VARCHAR(100) NOT NULL,
    "stats" "StatusEnumDb" NOT NULL DEFAULT 'ENABLE',
    "highlight" BOOLEAN NOT NULL,
    "slug" VARCHAR(200) NOT NULL,
    "dateRegistration" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datePublication" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateChenge" TIMESTAMP(0) NOT NULL,
    "imgPreview" VARCHAR(60),
    "imgDetail" VARCHAR(60),
    "legendImg" VARCHAR(50),
    "metaTitle" VARCHAR(160),
    "metaDescription" VARCHAR(500),
    "metaKeywords" VARCHAR(500),
    "metaImage" VARCHAR(60),
    "id_category" INTEGER NOT NULL,
    "id_subcategory" INTEGER NOT NULL,

    CONSTRAINT "tbl_news_pkey" PRIMARY KEY ("id_news")
);

-- CreateTable
CREATE TABLE "tbl_news_image" (
    "id_image" SERIAL NOT NULL,
    "imgSmall" VARCHAR(60) NOT NULL,
    "imgBig" VARCHAR(60) NOT NULL,
    "legend" VARCHAR(150),
    "id_news" INTEGER NOT NULL,

    CONSTRAINT "tbl_news_image_pkey" PRIMARY KEY ("id_image")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_news_category_slug_key" ON "tbl_news_category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_news_subcategory_slug_key" ON "tbl_news_subcategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_news_subcategory_slug_id_category_key" ON "tbl_news_subcategory"("slug", "id_category");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_news_slug_key" ON "tbl_news"("slug");

-- AddForeignKey
ALTER TABLE "tbl_news_subcategory" ADD CONSTRAINT "tbl_news_subcategory_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "tbl_news_category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_news" ADD CONSTRAINT "tbl_news_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "tbl_news_category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_news" ADD CONSTRAINT "tbl_news_id_subcategory_fkey" FOREIGN KEY ("id_subcategory") REFERENCES "tbl_news_subcategory"("id_subcategory") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_news_image" ADD CONSTRAINT "tbl_news_image_id_news_fkey" FOREIGN KEY ("id_news") REFERENCES "tbl_news"("id_news") ON DELETE CASCADE ON UPDATE CASCADE;
