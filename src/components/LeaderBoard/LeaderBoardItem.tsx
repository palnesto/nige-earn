interface LeaderBoardItemProps {
  rank: number;
  name: string;
  avatarUrl: string;
  coins: number;
  isCurrentUser: boolean;
}

const LeaderBoardItem: React.FC<LeaderBoardItemProps> = ({
  rank,
  name,
  avatarUrl,
  coins,
  isCurrentUser,
}) => {
  return (
    <div
      className={`
        flex items-center justify-between p-4
        ${
          isCurrentUser ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-400"
        }
        rounded-lg shadow-sm mb-2
      `}
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div
          className={`
            w-8 h-8 flex items-center justify-center font-bold rounded-full
            ${
              isCurrentUser
                ? "bg-white text-teal-600"
                : "bg-gray-300 text-gray-500"
            }
          `}
        >
          {rank}
        </div>
        <div className="flex items-center space-x-3">
          <img
            src={avatarUrl}
            alt={name}
            className="w-10 h-10 rounded-full object-cover border-2"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs">@{name}</p>
          </div>
        </div>
      </div>
      <div className="font-bold">{coins} coins</div>
    </div>
  );
};

export default LeaderBoardItem;
