/*
  Warnings:

  - You are about to alter the column `stats` on the `tbl_news` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `Enum(EnumId(2))`.
  - You are about to alter the column `stats` on the `tbl_news_category` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(2))`.
  - You are about to alter the column `stats` on the `tbl_news_subcategory` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `tbl_news` MODIFY `stats` ENUM('ENABLE', 'DISABLE') NOT NULL DEFAULT 'ENABLE';

-- AlterTable
ALTER TABLE `tbl_news_category` MODIFY `stats` ENUM('ENABLE', 'DISABLE') NOT NULL DEFAULT 'ENABLE';

-- AlterTable
ALTER TABLE `tbl_news_subcategory` MODIFY `stats` ENUM('ENABLE', 'DISABLE') NOT NULL DEFAULT 'ENABLE';
