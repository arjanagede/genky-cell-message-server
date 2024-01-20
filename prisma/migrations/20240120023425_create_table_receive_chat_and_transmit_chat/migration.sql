-- CreateTable
CREATE TABLE `reciveChat` (
    `id` CHAR(20) NOT NULL,
    `senderNumber` VARCHAR(13) NOT NULL,
    `message` TEXT NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

-- CreateTable
CREATE TABLE `transmitChat` (
    `id` CHAR(20) NOT NULL,
    `destinationNumber` VARCHAR(13) NOT NULL,
    `message` TEXT NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;
