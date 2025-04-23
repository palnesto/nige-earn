import React from "react";
import LeaderBoardItem from "./LeaderBoardItem";

interface User {
  id: string;
  name: string;
  avatar: string;
  username: string;
  coins: number;
}

interface LeaderBoardProps {
  users: User[];
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ users }) => {
  // Sort users by coins (highest first)
  const sortedUsers = [...users].sort((a, b) => b.coins - a.coins);

  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Leader Boards</h1>
        <p className="text-white opacity-80">
          Top performers based on coin balance
        </p>
      </div>

      <div className="space-y-2">
        {sortedUsers.slice(0, 10).map((user, index) => (
          <LeaderBoardItem
            key={user.id}
            rank={index + 1}
            user={{
              name: user.name,
              id: user.username,
              avatar: user.avatar,
              coins: user.coins,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
