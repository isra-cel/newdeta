"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

    export async function editUser(formData: FormData) {
  const id = Number(formData.get("id"))
  const name = formData.get("name") as string
  const email = formData.get("email") as string

  if (!name || !email) {
    throw new Error("All fields are required")}

  await prisma.user.update({
    where: {id},
    data: {
      name,
      email,
    },
  })

  // refresh sidebar
  revalidatePath("/")
}