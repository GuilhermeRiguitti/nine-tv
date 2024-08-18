-- CreateTable
CREATE TABLE `tbl_news_category` (
    `id_category` INTEGER NOT NULL AUTO_INCREMENT,
    `name_category` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(200) NOT NULL,
    `stats` ENUM('ATIVO', 'INATIVO') NOT NULL DEFAULT 'ATIVO',
    `metaTitle` VARCHAR(160) NULL,
    `metaDescription` VARCHAR(500) NULL,
    `metaKeywords` VARCHAR(500) NULL,
    `metaImage` VARCHAR(60) NULL,

    UNIQUE INDEX `tbl_news_category_slug_key`(`slug`),
    PRIMARY KEY (`id_category`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_news_subcategory` (
    `id_subcategory` INTEGER NOT NULL AUTO_INCREMENT,
    `name_subcategory` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `stats` ENUM('ATIVO', 'INATIVO') NOT NULL DEFAULT 'ATIVO',
    `metaTitle` VARCHAR(160) NULL,
    `metaDescription` VARCHAR(500) NULL,
    `metaKeywords` VARCHAR(500) NULL,
    `metaImage` VARCHAR(60) NULL,
    `id_category` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_news_subcategory_slug_key`(`slug`),
    UNIQUE INDEX `tbl_news_subcategory_slug_id_category_key`(`slug`, `id_category`),
    PRIMARY KEY (`id_subcategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_news` (
    `id_news` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `subtitle` VARCHAR(200) NOT NULL,
    `text` LONGTEXT NOT NULL,
    `autor` VARCHAR(100) NOT NULL,
    `font` VARCHAR(100) NOT NULL,
    `stats` ENUM('ATIVO', 'INATIVO') NOT NULL DEFAULT 'ATIVO',
    `highlight` BOOLEAN NOT NULL,
    `slug` VARCHAR(200) NOT NULL,
    `dateRegistration` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `datePublication` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dateChenge` DATETIME(0) NOT NULL,
    `metaTitle` VARCHAR(160) NULL,
    `metaDescription` VARCHAR(500) NULL,
    `metaKeywords` VARCHAR(500) NULL,
    `metaImage` VARCHAR(60) NULL,
    `id_category` INTEGER NOT NULL,
    `id_subcategory` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_news_slug_key`(`slug`),
    FULLTEXT INDEX `tbl_news_title_subtitle_text_idx`(`title`, `subtitle`, `text`),
    PRIMARY KEY (`id_news`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_news_subcategory` ADD CONSTRAINT `tbl_news_subcategory_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `tbl_news_category`(`id_category`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_news` ADD CONSTRAINT `tbl_news_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `tbl_news_category`(`id_category`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_news` ADD CONSTRAINT `tbl_news_id_subcategory_fkey` FOREIGN KEY (`id_subcategory`) REFERENCES `tbl_news_subcategory`(`id_subcategory`) ON DELETE RESTRICT ON UPDATE CASCADE;
