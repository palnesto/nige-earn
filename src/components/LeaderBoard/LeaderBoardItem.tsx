import React from "react";

interface LeaderBoardItemProps {
  rank: number;
  user: {
    name: string;
    id: string;
    avatar: string;
    coins: number;
  };
}

const LeaderBoardItem: React.FC<LeaderBoardItemProps> = ({ rank, user }) => {
  const isTopThree = rank <= 3;

  return (
    <div
      className={`flex items-center justify-between p-4 ${
        isTopThree ? "bg-teal-600 text-white" : "bg-white text-gray-800"
      } rounded-lg shadow-sm mb-2`}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`w-8 h-8 flex items-center justify-center font-bold ${
            isTopThree ? "text-teal-600 bg-white" : "text-white bg-teal-600"
          } rounded-full`}
        >
          {rank}
        </div>

        <div className="flex items-center space-x-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />

          <div>
            <p className="font-medium">{user.name}</p>
            <p
              className={`text-xs ${
                isTopThree ? "text-teal-100" : "text-gray-500"
              }`}
            >
              @{user.id}
            </p>
          </div>
        </div>
      </div>

      <div className="font-bold">{user.coins} coins</div>
    </div>
  );
};

export default LeaderBoardItem;
