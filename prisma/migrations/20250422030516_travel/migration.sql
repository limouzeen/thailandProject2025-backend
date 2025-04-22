-- CreateTable
CREATE TABLE `user_tb` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(100) NOT NULL,
    `userEmail` VARCHAR(50) NOT NULL,
    `userPassword` VARCHAR(50) NOT NULL,
    `userImage` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `travel_tb` (
    `travelId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `travelPlace` VARCHAR(200) NOT NULL,
    `travelLocation` VARCHAR(200) NOT NULL,
    `travelImage` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`travelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `travelId` INTEGER NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `travel_tb` ADD CONSTRAINT `travel_tb_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user_tb`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user_tb`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_travelId_fkey` FOREIGN KEY (`travelId`) REFERENCES `travel_tb`(`travelId`) ON DELETE RESTRICT ON UPDATE CASCADE;
