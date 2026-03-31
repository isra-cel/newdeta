"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createSidebarItem(formData: FormData) {
  const name = formData.get("name") as string
  const icon = formData.get("icon") as string
  const link = formData.get("link") as string

  if (!name || !icon || !link) {
    throw new Error("All fields are required")}

  await prisma.sidebarItem.create({
    data: {
      name,
      icon,
      link,
    },
  })

  // refresh sidebar
  revalidatePath("/")
}

export async function deleteSidebarItem(id: number) {

  await prisma.sidebarItem.delete({
    where: { id },
  })

  revalidatePath("/")
}