import { Home, Trophy, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

/**
 * Mobile-only drawer (right side).
 * Hidden at md and above.
 */
export function AppSidebar() {
  const { pathname } = useLocation();
  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "Leader Board", url: "/leader-board", icon: Trophy },
    { title: "Coming Soon", url: "/coming-soon", icon: Clock },
  ];

  return (
    <Sidebar side="right" className="md:hidden md:w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center gap-3 p-2 ${
                        pathname === item.url
                          ? "text-teal-600 font-medium"
                          : "hover:text-teal-600"
                      }`}
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
