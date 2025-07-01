import { useApiQuery } from "@/hooks/useApiQuery";
import LeaderBoardItem from "./LeaderBoardItem";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const LeaderBoard = () => {
  const { data, isLoading, isError } = useApiQuery(
    endpoints.nigeEarn.leaderboard({
      queryParams: { monthly: true },
    })
  );
  const entries = useMemo(() => data?.data?.leaderboard || [], [data]);

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

  const topTen = entries.filter((e) => e.rank <= 10);
  const me = entries.find((e) => e.isCurrentUser);
  const displayList = me && me.rank > 10 ? [...topTen, me] : topTen;

  // **Always use Madrid time** for the label:
  const nowMadrid = dayjs().tz("Europe/Madrid");
  const label = nowMadrid.format("MMMM YYYY").toUpperCase();

  return (
    <div className="p-4">
      <div className="pb-6">
        <img src="/leader.jpeg" alt="leader" className="w-full" />
      </div>
      <div className="text-center mb-5 text-xl font-bold">{label}</div>
      <div className="space-y-2">
        {displayList.map((e) => (
          <LeaderBoardItem
            key={e.accountId}
            rank={e.rank}
            name={e.twitterHandle}
            avatarUrl={e.avatarUrl}
            coins={e.totalCoins}
            isCurrentUser={e.isCurrentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
