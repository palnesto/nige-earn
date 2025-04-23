import React from "react";
import { Home, Trophy, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-gradient-to-b from-teal-700 to-teal-900 text-white fixed">
      <div className="p-6">
        <div className="w-8 h-8 text-white">
          {/* Eagle icon from Lucide */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.9 18.55c.06-.43.1-.86.1-1.3 0-1.85-.49-3.58-1.3-5.09" />
            <path d="M11.11 15.34a5 5 0 0 0 3.48 2.61M14 3c-.53 0-1.04.11-1.52.3a7 7 0 0 0-4.23 5.06 5.59 5.59 0 0 0-.97 1.3m3.72-6.36c-2 .31-3.8 1.2-5.21 2.52L3 8.94l2.6 1.52-2.53 4.05 1.24.74 2.56-4.1 2.56 1.5v5.6l1.01.58.93-3.58" />
            <path d="M5 3 2 6l5 .85L14 3z" />
            <path d="m14 3 3 3 .85-3.23" />
            <path d="m7 14-1.19 5.98 4.25.77" />
            <path d="M22 12v8h-2.01C17.91 15.93 15.11 13 12 13v-3l10 2Z" />
            <path d="m17 17-2.91 7H19c1.2-2.4 2.5-4.8 3-7h-5Z" />
            <circle cx="12" cy="10" r="1" />
          </svg>
          <span className="text-xl font-bold text-white">NigeCoin</span>
        </div>
      </div>

      <div className="flex flex-col mt-8 space-y-2 flex-1">
        <Link
          to="/app"
          className={`flex items-center px-6 py-3 transition-colors ${
            path === "/app"
              ? "bg-teal-800 border-l-4 border-white"
              : "hover:bg-teal-800"
          }`}
        >
          <Home size={20} className="mr-3" />
          <span className="font-medium">Home</span>
        </Link>

        <Link
          to="/app/leaderboard"
          className={`flex items-center px-6 py-3 transition-colors ${
            path === "/app/leaderboard"
              ? "bg-teal-800 border-l-4 border-white"
              : "hover:bg-teal-800"
          }`}
        >
          <Trophy size={20} className="mr-3" />
          <span className="font-medium">Leader Board</span>
        </Link>

        <Link
          to="/app/coming-soon"
          className={`flex items-center px-6 py-3 transition-colors ${
            path === "/app/coming-soon"
              ? "bg-teal-800 border-l-4 border-white"
              : "hover:bg-teal-800"
          }`}
        >
          <Clock size={20} className="mr-3" />
          <span className="font-medium">Coming Soon</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
