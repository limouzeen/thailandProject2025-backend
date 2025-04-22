/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `user_tb` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_tb_userEmail_key` ON `user_tb`(`userEmail`);
