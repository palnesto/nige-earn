import { ReactNode } from "react";
import MobileNav from "../components/Navigation/MobileNav";
import Sidebar from "../components/Navigation/Sidebar";
import UserProfile from "../components/User/UserProfile";
import { useAuthStore } from "@/stores/useAuthStore";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const user = useAuthStore((s) => s.user);
  console.log("user", user);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <Sidebar />

      {/* Fixed UserProfile */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 md:left-64 px-4 py-3">
        <UserProfile
          name="Rishabh Hurshan"
          coinBalance={1250}
          // profileImage="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
          notifications={3}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 relative">
        <div className="h-screen overflow-y-auto pt-20 pb-20 md:pb-6">
          <div className="max-w-full overflow-x-hidden">{children}</div>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNav />
    </div>
  );
};

export default AppLayout;
