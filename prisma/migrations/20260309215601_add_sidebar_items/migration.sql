-- CreateTable
CREATE TABLE "SidebarItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "SidebarItem_pkey" PRIMARY KEY ("id")
);
