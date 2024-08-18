-- AlterTable
ALTER TABLE `tbl_news` ADD COLUMN `imgDetail` VARCHAR(60) NULL,
    ADD COLUMN `imgPreview` VARCHAR(60) NULL,
    ADD COLUMN `legendImg` VARCHAR(50) NULL;

-- CreateTable
CREATE TABLE `tbl_news_image` (
    `id_image` INTEGER NOT NULL AUTO_INCREMENT,
    `imgSmall` VARCHAR(60) NOT NULL,
    `imgBig` VARCHAR(60) NOT NULL,
    `legend` VARCHAR(150) NULL,
    `id_news` INTEGER NOT NULL,

    PRIMARY KEY (`id_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_news_image` ADD CONSTRAINT `tbl_news_image_id_news_fkey` FOREIGN KEY (`id_news`) REFERENCES `tbl_news`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;
