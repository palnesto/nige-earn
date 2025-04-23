import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/Navigation/MobileNav";
import Sidebar from "../components/Navigation/Sidebar";

const AppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 md:ml-64 relative">
        <div className="h-screen overflow-y-auto pb-20 md:pb-6">
          <Outlet />
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNav />
    </div>
  );
};

export default AppLayout;
