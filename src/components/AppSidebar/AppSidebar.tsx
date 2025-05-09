import { Home, Trophy, Clock, LogOut, Send } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

/**
 * Mobile-only drawer (right side).
 * Hidden at md and above.
 */
export function AppSidebar() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <Sidebar side="right" className="md:hidden w-64 flex flex-col">
      {/* Support & Logout actions at bottom */}
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="https://t.me/ivan_sriv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:text-teal-600"
                >
                  <Send />
                  <span className="text-lg">Support</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button
                  onClick={logout}
                  className="flex items-center gap-3 p-2 hover:text-red-500 "
                >
                  <LogOut />
                  <span className="text-lg">Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
}
