import { ReactNode } from "react";
import { Home, Trophy, Clock, Send, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const user = useAuthStore((s) => s.user);
  console.log("user", user);

  return (
    <SidebarProvider>
      {/* <div className="flex min-h-screen bg-gray-50">
        
        <Sidebar />

        
        <div className="fixed top-0 left-0 right-0 bg-white z-10 md:left-64 px-4 py-3">
          <UserProfile
            name={user?.profile?.username ?? "default"}
            coinBalance={user?.account?.balance ?? "null"}
            // profileImage="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            notifications={3}
          />
        </div>

       
        <div className="flex-1 md:ml-64 relative">
          <div className="h-screen overflow-y-auto pt-20 pb-20 md:pb-6">
            <div className="max-w-full overflow-x-hidden">{children}</div>
          </div>
        </div>

        
        <MobileNav />
      </div> */}

      {/* new */}

      <div className="w-full max-h-[100dvh] min-h-[100dvh] h-[100dvh] overflow-hidden flex flex-col-reverse md:flex-row">
        <div className="h-full w-full md:basis-auto md:max-w-64 md:w-64 md:min-w-64">
          {/* ← Mobile drawer lives here */}
          <AppSidebar />
          {/* mobile nav */}
          <div className="block md:hidden">
            <MobileNav />
          </div>

          {/* desktop nav */}
          <div className="hidden md:block">
            <DesktopNav />
          </div>
        </div>

        <div className="@container/main h-full w-full md:max-w-none">
          <Main>{children}</Main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;

const DesktopNav = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="bg-[#00857F] w-full min-h-[100dvh] max-h-[100dvh] flex flex-col">
      <div className="h-40 min-h-40 max-h-40 shrink-0">
        <div className="p-6 flex items-center justify-center h-full">
          <img src="/eagle.png" alt="Eagle icon" className="h-12" />
          <span className="text-2xl font-bold text-white">NigeEarn</span>
        </div>
      </div>
      <div
        className="overflow-y-auto text-white"
        style={{
          maxHeight: "calc(100dvh - 21rem)",
          minHeight: "calc(100dvh - 21rem)",
          height: "calc(100dvh - 21rem)",
        }}
      >
        <Link
          to="/"
          className={`flex items-center px-6 py-3 transition-colors ${
            path === "/"
              ? "bg-[#42F3EC] bg-opacity-10 border-l-4 border-white"
              : "hover:bg-teal-800"
          }`}
        >
          <Home size={20} className="mr-3" />
          <span className="font-medium">Home</span>
        </Link>

        <Link
          to="/leader-board"
          className={`flex items-center px-6 py-3 transition-colors ${
            path === "/leader-board"
              ? "bg-[#42F3EC] bg-opacity-10 border-l-4 border-white"
              : "hover:bg-teal-800"
          }`}
        >
          <Trophy size={20} className="mr-3" />
          <span className="font-medium">LeaderBoard</span>
        </Link>

        <Link
          to="/coming-soon"
          className={`flex items-center px-6 py-3 transition-colors ${
            path === "/coming-soon"
              ? "bg-[#42F3EC] bg-opacity-10 border-l-4 border-white"
              : "hover:bg-teal-800"
          }`}
        >
          <Clock size={20} className="mr-3" />
          <span className="font-medium">Coming Soon</span>
        </Link>
      </div>
      <div className="h-44 min-h-44 max-h-44 shrink-0 relative">
        <figure className="bg-gradient-to-b from-[#206562 ] via-[#00857F] to-transparent ">
          <img src="/bg2.png" alt="NigeEarn" className="w-full" />
        </figure>
        <div className="absolute bottom-1/4 flex flex-col space-y-2 px-7 w-52">
          <button
            onClick={() => window.open("https://t.me/ivan_sriv", "_blank")}
            className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition flex items-center justify-around text-white"
            aria-label="Support"
          >
            <Send className="w-5 h-5" />
            <span>Support</span>
          </button>
          <button
            className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition flex items-center justify-around text-white"
            aria-label="Logout"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="h-20 bg-white border-t border-gray-200 flex items-center justify-around">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center ${
          path === "/" ? "text-teal-600" : "text-gray-500"
        }`}
      >
        <Home size={24} />
        <span className={`text-xs mt-1 ${path === "/" ? "" : "hidden"}`}>
          Home
        </span>
      </Link>

      <Link
        to="/leader-board"
        className={`flex flex-col items-center justify-center ${
          path === "/leader-board" ? "text-teal-600" : "text-gray-500"
        }`}
      >
        <Trophy size={24} />
        <span
          className={`text-xs mt-1 ${path === "/leader-board" ? "" : "hidden"}`}
        >
          Leader Board
        </span>
      </Link>

      {/* <Link
        to="/profile"
        className={`flex flex-col items-center justify-center ${
          path === "/profile" ? "text-teal-600" : "text-gray-500"
        }`}
      > */}
      {/* <User size={24} />
        <span className={`text-xs mt-1 ${path === "/profile" ? "" : "hidden"}`}>
          Profile
        </span> */}
      <SidebarTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          {/* <User size={28} /> */}
        </Button>
      </SidebarTrigger>
      {/* </Link> */}
    </div>
  );
};

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full  md:min-h-[100dvh] flex md:justify-center">
      <div className="flex-col w-full md:max-w-[768px] lg:max-w-[1024px]">
        <div className="h-40 min-h-20 max-h-20 shrink-0 overflow-hidden shadow-lg md:rounded-full">
          <MainHead />
        </div>
        <div className="@lg/main:flex overflow-y-auto main-ht w-full">
          <div className="w-full pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

const MainHead = () => {
  const user = useAuthStore((s) => s.user);
  console.log("user", user);
  return (
    <div className="h-full w-full px-6 flex justify-between items-end pb-3">
      <div className="flex flex-col">
        <p className="text-gray-500 text-xs sm:text-sm">Hello,</p>
        <h1 className="text-base sm:text-xl font-bold text-gray-800 max-w-[10rem] overflow-hidden whitespace-nowrap truncate">
          {user?.profile?.username ?? "default"}
        </h1>
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <span className="text-sm sm:text-base font-bold">
            {user?.account?.balance ?? "null"}
          </span>
          <img src="/nigecoin.gif" alt="Coin" className="w-14 sm:w-16" />
        </div>

        {/* <div className="relative">
          <img
            src={profileImage}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div> */}

        {/* <div className="relative">
          <img src="/Bell.png" className="w-8" />

          <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {"0"}
          </span>
        </div> */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative" aria-label="Notifications">
              <img src="/Bell.png" className="w-8 cursor-pointer" alt="Bell" />
              <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2">
            <p>No notifications for now</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
