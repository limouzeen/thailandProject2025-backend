-- AlterTable
ALTER TABLE `user_tb` MODIFY `userName` VARCHAR(191) NOT NULL,
    MODIFY `userEmail` VARCHAR(191) NOT NULL,
    MODIFY `userPassword` VARCHAR(191) NOT NULL,
    MODIFY `userImage` VARCHAR(191) NULL;
