/*
  Warnings:

  - You are about to drop the column `thread_order` on the `messages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "messages" DROP COLUMN "thread_order";
