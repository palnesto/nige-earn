import { Home, Trophy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-10 md:hidden">
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

      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center ${
          path === "/profile" ? "text-teal-600" : "text-gray-500"
        }`}
      >
        <User size={24} />
        <span className={`text-xs mt-1 ${path === "/profile" ? "" : "hidden"}`}>
          Profile
        </span>
      </Link>
    </div>
  );
};

export default MobileNav;
