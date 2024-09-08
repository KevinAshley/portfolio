/*
  Warnings:

  - You are about to drop the column `ownerId` on the `TodoItem` table. All the data in the column will be lost.
  - Added the required column `userId` to the `TodoItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TodoItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TodoItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TodoItem" ("completed", "createdAt", "id", "name", "updatedAt") SELECT "completed", "createdAt", "id", "name", "updatedAt" FROM "TodoItem";
DROP TABLE "TodoItem";
ALTER TABLE "new_TodoItem" RENAME TO "TodoItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
