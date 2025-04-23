import React from "react";
import UserProfile from "../components/User/UserProfile";
import Carousel from "../components/UI/Carousel";
import ActionCard from "../components/UI/ActionCard";
import ActivityList from "../components/ActivityList/ActivityList";
import { Twitter, PenTool } from "lucide-react";

const HomePage: React.FC = () => {
  // Mock user data
  const user = {
    name: "Rishabh Hurshan",
    coinBalance: 1250,
    profileImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    notifications: 3,
  };

  // Mock activities data
  const activities = [
    {
      id: "1",
      type: "share" as const,
      date: "Sep 18, 2023",
      reward: { amount: 50, status: "in-transit" as const },
    },
    {
      id: "2",
      type: "like" as const,
      date: "August 08, 2023",
      reward: { amount: 50, status: "success" as const },
    },
    {
      id: "3",
      type: "mention" as const,
      date: "July 22, 2023",
      reward: { amount: 50, status: "success" as const },
    },
  ];

  // Action handlers (placeholders)
  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action}`);
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <UserProfile {...user} />

      {/* Action Cards */}
      <div className="mb-8 overflow-hidden">
        <Carousel itemWidth={280}>
          <ActionCard
            title="Write Your First Post on X @Nigecoin"
            gradient="blue"
            buttonText="Get 100XP"
            icon={<Twitter size={24} />}
            onAction={() => handleAction("twitter-post")}
          />
          <ActionCard
            title="Write something and tag us"
            gradient="teal"
            buttonText="Get 100XP"
            icon={<PenTool size={24} />}
            onAction={() => handleAction("tag-post")}
          />
        </Carousel>
      </div>

      {/* Ways to Earn */}
      <div className="mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl -z-10" />
        <h2 className="text-xl font-bold mb-4 text-white px-4">
          New Ways to Earn
        </h2>
        <Carousel itemWidth={200} showMultiple>
          <ActionCard
            title="Sometext for heading"
            gradient="purple"
            buttonText="Action button"
            onAction={() => handleAction("earn-1")}
          />
          <ActionCard
            title="Sometext for heading"
            gradient="blue"
            buttonText="Action button"
            onAction={() => handleAction("earn-2")}
          />
          <ActionCard
            title="Sometext for heading"
            gradient="teal"
            buttonText="Action button"
            onAction={() => handleAction("earn-3")}
          />
        </Carousel>
      </div>

      {/* Recent Activities */}
      <ActivityList activities={activities} />
    </div>
  );
};

export default HomePage;
