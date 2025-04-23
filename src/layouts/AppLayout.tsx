import { ReactNode } from "react";
import MobileNav from "../components/Navigation/MobileNav";
import Sidebar from "../components/Navigation/Sidebar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 md:ml-64 relative">
        <div className="h-screen overflow-y-auto pb-20 md:pb-6">{children}</div>
      </div>

      {/* Mobile navigation */}
      <MobileNav />
    </div>
  );
};

export default AppLayout;
