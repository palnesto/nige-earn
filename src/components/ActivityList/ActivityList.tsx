import { useApiQuery } from "@/hooks/useApiQuery";
import ActivityItem from "./ActivityItem";
import endpoints from "@/api/endpoints";

interface Activity {
  id: string;
  type: "share" | "like" | "mention";
  date: string;
  reward: {
    amount: number;
    status: "success" | "in-transit" | "pending";
  };
}

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList = ({ activities }: ActivityListProps) => {
  const { data, isLoading, isError } = useApiQuery(
    endpoints.nigeEarn.activities
  );

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const getActivityDetails = (activity: Activity) => {
    switch (activity.type) {
      case "share":
        return {
          icon: <img src="/telegram.png" alt="" className="w-10" />,
          activity: "Shared A Post",
        };
      case "like":
        return {
          icon: <img src="/love.png" alt="" className="w-10" />,
          activity: "Liked A Post",
        };
      case "mention":
        return {
          icon: <img src="/at.png" alt="" className="w-10" />,
          activity: "Mentioned @Nigecoin",
        };
      default:
        return {
          icon: <img src="/telefram.png" alt="" className="w-10" />,
          activity: "Unknown Activity",
        };
    }
  };

  console.log(data);
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
      <div className="space-y-2">
        {activities.map((activity) => {
          const { icon, activity: activityText } = getActivityDetails(activity);

          return (
            <ActivityItem
              key={activity.id}
              icon={icon}
              activity={activityText}
              date={activity.date}
              reward={activity.reward}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActivityList;
