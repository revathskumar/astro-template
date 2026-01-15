import { Inbox } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                {/*<IconInnerShadowTop className="!size-5" />*/}
                <span className="text-base font-semibold">Title</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Your Boards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <MenuItem url="/" text="Home" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

const MenuItem = ({
  url,
  text,
  isActive,
}: {
  url: string
  text: string
  isActive?: boolean
}) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <a href={url}>
          <Inbox />
          <span>{text}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
