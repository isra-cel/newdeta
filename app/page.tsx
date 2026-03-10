import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import prisma from "@/lib/prisma";
import Image from "next/image";


export default async function Home() {
  const users = await prisma.user.findMany() ;
  const oneuser = await prisma.user.findUnique({
    where: 
    {
      id: 2,
    }
  }) ;
  console.log(users,"USERS ARE HERE")
  console.log(oneuser,"THIS IS A USER")

  const postofisra = await prisma.post.findMany({
    where:
    {
       authorId: 1,
    }
  }) ;

  console.log(postofisra,"ISRA POST")
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>

<div className="flex gap-10">
      {
        users.map((user)=>(
          
         <HoverCard key={user.id}>
         <HoverCardTrigger>{user.name}</HoverCardTrigger>
         <HoverCardContent>
          {user.email}
         </HoverCardContent>
         </HoverCard>
 
        ))
      }

      
      {
        <HoverCard>
        <HoverCardTrigger>Isra</HoverCardTrigger>
        <HoverCardContent>
        The React Framework – created and maintained by @vercel.
        </HoverCardContent>
        </HoverCard>
      }

</div>
      
    </div>
  );
}
