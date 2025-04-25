import { Home, Trophy, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-[#00857F] text-white fixed">
      <div className="p-6">
        <div className="w-8 h-8 flex  ">
          {/* Eagle icon from Lucide */}
          <img src="/eagle.png" alt="Eagle icon" />
          <span className="text-xl font-bold text-white">NigeCoin</span>
        </div>
      </div>

      <div className="flex flex-col mt-8 space-y-2 flex-1">
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
          <span className="font-medium">Leader Board</span>
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
      <figure className="bg-gradient-to-b from-[#206562 ] via-[#00857F] to-transparent  ">
        <img src="/bg2.png" alt="NigeCoin" className="w-full" />
      </figure>
    </div>
  );
};

export default Sidebar;
