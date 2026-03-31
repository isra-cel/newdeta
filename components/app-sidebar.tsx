import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChevronDown, Plus, Settings, User2 } from "lucide-react"
import Link from "next/link"
import { Collapsible } from "radix-ui"
import * as Icons from "lucide-react"
import prisma from "@/lib/prisma"
import { deleteSidebarItem } from "@/app/actions/sidebar"
import { Button } from "./ui/button"

export async function AppSidebar() {
  const items = await prisma.sidebarItem.findMany({
    orderBy: { id: "asc" }
  })
  console.log(items,"app sidebar content is here")
  return (
    <Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        
        
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          
        
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
  



 <SidebarContent>
  {items.map((item) => {
    const Icon = Icons[item.icon as keyof typeof Icons] as React.ElementType

    // add the objects individually into the sidebar by maping the item not item(s)
    return (
      <div key={item.id} className="flex items-center justify-between">

      <Link href={item.link} className="flex-1">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            {Icon && <Icon size={16} />}
            {item.name}
          </SidebarGroupLabel>
        </SidebarGroup>
      </Link>

      <form action={async () => {
        "use server"
        await deleteSidebarItem(item.id)
      }} >


        
        <Button type="submit" className="mr-5">
        <Icons.Trash size={14} className="text-black-500" />
        </Button>

      </form>

    
      </div>
    )
  })}
</SidebarContent>

  

  <SidebarFooter>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <User2 /> Username
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarFooter>



</Sidebar>
  )
}