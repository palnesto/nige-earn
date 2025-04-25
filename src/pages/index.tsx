import ActionCard from "@/components/ui/ActionCard";
import ActivityList from "@/components/ActivityList/ActivityList";
import { Twitter, PenTool, Share, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

const HomePage: React.FC = () => {
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

  const actionCards = [
    {
      title: "Write Your First Post on X @Nigecoin",
      gradient: "blue" as const,
      buttonText: "Get 100XP",
      icon: <Twitter size={24} />,
      action: "twitter-post",
    },
    {
      title: "Write something and tag us",
      gradient: "teal" as const,
      buttonText: "Get 100XP",
      icon: <PenTool size={24} />,
      action: "tag-post",
    },
    {
      title: "Share our latest update",
      gradient: "blue" as const,
      buttonText: "Get 50XP",
      icon: <Share size={24} />,
      action: "share-post",
    },
    {
      title: "Join the conversation",
      gradient: "teal" as const,
      buttonText: "Get 75XP",
      icon: <MessageCircle size={24} />,
      action: "join-conversation",
    },
  ];

  const earnCards = [
    {
      title: "Daily Check-in Bonus",
      gradient: "purple" as const,
      buttonText: "Claim Now",
      action: "daily-bonus",
    },
    {
      title: "Complete Profile",
      gradient: "blue" as const,
      buttonText: "Start Now",
      action: "complete-profile",
    },
    {
      title: "Invite Friends",
      gradient: "teal" as const,
      buttonText: "Share Link",
      action: "invite-friends",
    },
    {
      title: "Join Discord",
      gradient: "purple" as const,
      buttonText: "Connect",
      action: "join-discord",
    },
    {
      title: "Follow on X",
      gradient: "blue" as const,
      buttonText: "Follow Now",
      action: "follow-x",
    },
    {
      title: "Join Community",
      gradient: "teal" as const,
      buttonText: "Join Now",
      action: "join-community",
    },
  ];

  // Action handlers (placeholders)
  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action}`);
  };

  return (
    <div className="container mx-auto px-10 md:px-6">
      {/* Action Cards */}
      <div className="mb-8">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {actionCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2"
              >
                <ActionCard
                  title={card.title}
                  gradient={card.gradient}
                  buttonText={card.buttonText}
                  icon={card.icon}
                  onAction={() => handleAction(card.action)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Ways to Earn */}
      <div className="mb-8  ">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 -z-10" /> */}
        <h2 className="text-xl font-bold mb-4 text-white px-4 pt-4">
          New Ways to Earn
        </h2>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {earnCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <ActionCard
                  title={card.title}
                  gradient={card.gradient}
                  buttonText={card.buttonText}
                  onAction={() => handleAction(card.action)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Recent Activities */}
      <ActivityList activities={activities} />
    </div>
  );
};

export default HomePage;
