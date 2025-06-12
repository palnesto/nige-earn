import { LogOut, Send, Loader2 } from "lucide-react";

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useApiMutation } from "@/hooks/useApiMutation";
import endpoints from "@/api/endpoints";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/**
 * Mobile-only drawer (right side).
 * Hidden at md and above.
 */
export function AppSidebar() {
  const navigate = useNavigate();
  const { mutate: logoutMutate, isPending: isLogoutPending } = useApiMutation({
    route: endpoints?.globalRoutes.auth.logout,
    method: "POST",
    onSuccess: () => {
      toast.success("Logged out");
      navigate(0);
    },
  });
  return (
    <Sidebar side="right" className="md:hidden w- flex flex-col h-full">
      {/* Support & Logout actions at bottom */}
      <SidebarGroup className="flex-1 flex flex-col justify-between pt-20">
        <SidebarGroupContent>
          <div className="h-40 min-h-40 max-h-40 shrink-0 pb-5">
            <div className="p-6 flex flex-col items-center justify-center h-full">
              <img src=" /eagle2.png" alt="Eagle icon" className="h-32" />
              <span className="text-4xl tracking-wider font-bold text-white">
                NigeEarn
              </span>
            </div>
          </div>
          <SidebarMenu className="flex flex-col items-center gap-2">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a
                  href="https://t.me/ivan_sriv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-3 p-2 hover:text-teal-600 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 flex items-center justify-around w-32"
                >
                  <Send />
                  <span className="text-lg">Support</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button
                  disabled={isLogoutPending}
                  onClick={() => {
                    logoutMutate({});
                  }}
                  className="gap-3 p-2 hover:text-red-500 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 flex items-center justify-around w-32"
                >
                  {isLogoutPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <LogOut className="w-5 h-5" />
                  )}
                  <span className="text-lg">Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <figure className="bg-gradient-to-b from-[#206562 ] via-[#00857F] to-transparent w-full">
          <img
            src="/bg2.png"
            alt="Nigeearn"
            className="w-full object-cover h-full"
          />
        </figure>
      </SidebarGroup>
    </Sidebar>
  );
}
