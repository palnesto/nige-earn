// import { useApiQuery } from "@/hooks/useApiQuery";
// import LeaderBoardItem from "./LeaderBoardItem";
// import endpoints from "@/api/endpoints";

// interface Entry {
//   rank: number;
//   accountId: string;
//   balance: number;
//   twitterHandle: string;
//   avatarUrl: string;
//   isCurrentUser: boolean;
// }

// interface ApiResponse {
//   statusCode: number;
//   data: Entry[];
//   message: string;
//   success: boolean;
// }

// const LeaderBoard: React.FC = () => {
//   const { data, isLoading, isError } = useApiQuery<ApiResponse>(
//     endpoints.nigeEarn.leaderboard
//   );

//   if (isLoading) return <div>Loading…</div>;
//   if (isError || !data) return <div>Error</div>;

//   const entries = data.data;
//   // top-10 by rank
//   const topTen = entries.filter((e) => e.rank <= 10);
//   // current user entry
//   const me = entries.find((e) => e.isCurrentUser);
//   // if you're outside top-10, append you in 11th
//   const displayList = me && me.rank > 10 ? [...topTen, me] : topTen;

//   return (
//     <div className="p-4">
//       <div className="pb-6">
//         <img src="/leader.png" alt="leader" className="w-full" />
//       </div>
//       <div className="space-y-2">
//         {displayList.map((e) => (
//           <LeaderBoardItem
//             key={e.accountId}
//             rank={e.rank}
//             name={e.twitterHandle}
//             avatarUrl={e.avatarUrl}
//             coins={e.balance}
//             isCurrentUser={e.isCurrentUser}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeaderBoard;

import { useApiQuery } from "@/hooks/useApiQuery";
import LeaderBoardItem from "./LeaderBoardItem";
import endpoints from "@/api/endpoints";

interface Entry {
  rank: number;
  accountId: string;
  balance: number;
  twitterHandle: string;
  avatarUrl: string;
  isCurrentUser: boolean;
}

interface ApiResponse {
  statusCode: number;
  data: Entry[];
  message: string;
  success: boolean;
}

const LeaderBoard: React.FC = () => {
  const { data, isLoading, isError } = useApiQuery<ApiResponse>(
    endpoints.nigeEarn.leaderboard
  );

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <img src="/nigecoin.gif" className="w-40" />
      </div>
    );
  }

  if (isError || !data) {
    return <div className="p-4 text-red-500">Failed to load leaderboard.</div>;
  }

  const entries = data.data;
  const topTen = entries.filter((e) => e.rank <= 10);
  const me = entries.find((e) => e.isCurrentUser);
  const displayList = me && me.rank > 10 ? [...topTen, me] : topTen;

  return (
    <div className="p-4">
      <div className="pb-6">
        <img src="/leader.jpeg" alt="leader" className="w-full" />
      </div>
      <div className="space-y-2">
        {displayList.map((e) => (
          <LeaderBoardItem
            key={e.accountId}
            rank={e.rank}
            name={e.twitterHandle}
            avatarUrl={e.avatarUrl}
            coins={e.balance}
            isCurrentUser={e.isCurrentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
