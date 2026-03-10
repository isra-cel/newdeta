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


export async function AppSidebar() {
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
{/* <Link href="https://www.google.com">
  <SidebarGroup>
    <SidebarGroupLabel>
        Settings 
    <Settings />
    </SidebarGroupLabel>
  </SidebarGroup>
</Link> */}



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