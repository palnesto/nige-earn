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
      <div className="py-6">
        <img src="/leader.png" alt="leader" className="w-full" />
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
