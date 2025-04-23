import React from "react";
import ActivityItem from "./ActivityItem";
import { Share, Heart, AtSign } from "lucide-react";

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

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  const getActivityDetails = (activity: Activity) => {
    switch (activity.type) {
      case "share":
        return {
          icon: <Share size={18} />,
          activity: "Shared A Post",
        };
      case "like":
        return {
          icon: <Heart size={18} />,
          activity: "Liked A Post",
        };
      case "mention":
        return {
          icon: <AtSign size={18} />,
          activity: "Mentioned @Nigecoin",
        };
      default:
        return {
          icon: <Share size={18} />,
          activity: "Unknown Activity",
        };
    }
  };

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
