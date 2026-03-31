import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";
import { ChevronRightIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { editUser } from "../actions/editUser";


export async function deleteUser(id: number) {
    "use server"

    await prisma.user.delete({

        where: {id},
    }); 
   revalidatePath("/users");
}


export default async function users(){
    const users = await prisma.user.findMany();

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user) => (

         <Card key={user.id} className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2">

        <form action={editUser}>
          <Input
          className="mb-4"
          id="id"
          name="id"
          defaultValue={user.id}
          type="hidden"
          />
          <Input
          className="mb-4"
          id="name"
          name="name"
          placeholder="Enter new name"
          />
          <Input
          className="mb-4"
          id="email"
          name="email"
          placeholder="Enter new email"
          />
          <Button type="submit">Update</Button>

        </form>

      <form action={deleteUser.bind(null, user.id)} className="w-full">
        <Button variant="destructive" size="sm" className="w-full">
          Delete user
        </Button>
      </form>

      </CardFooter>
    </Card>
            ))}

        </div>
    )
}