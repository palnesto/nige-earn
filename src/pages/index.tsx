import ActionCard from "@/components/ui/ActionCard";
import ActivityList from "@/components/ActivityList/ActivityList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      gradient: "greenBlue" as const,
      buttonText: "Get 2 coins",
      icon: <img src="/x.png" alt="Twitter" className="w-28" />,
      action: "twitter-post",
    },
    {
      title: "Share your thoughts by quote tweeting any $NIGE tweet.",
      gradient: "purpleRed" as const,
      buttonText: "Get 5 coins",
      icon: <img src="/love.png" alt="Twitter" className="w-28" />,
      action: "tag-post",
    },
    {
      title: "Simply like any recent @Nigecoin post to get rewarded.",
      gradient: "purplePink" as const,
      buttonText: "Get 2 coins",
      icon: <img src="/quote.png" alt="Twitter" className="h-full w-52" />,
      action: "share-post",
    },
    {
      title: "Drop a genuine replies under @Nigecoin latest posts.",
      gradient: "purpleLavender" as const,
      buttonText: "Get 1 coins",
      icon: <img src="/Comments.png" alt="Twitter" className="w-28" />,
      action: "join-conversation",
    },
    {
      title:
        "Retweet any official @Nigecoin tweet to support the mission and earn coins.",
      gradient: "blueTeal" as const,
      buttonText: "Get 4 coins",
      icon: <img src="/retweet.png" alt="Twitter" className="w-28" />,
      action: "join-conversation",
    },
    {
      title: "Share your thoughts by quote tweeting any @Nigecoin tweet.",
      gradient: "blueTeal" as const,
      buttonText: "Get 5 coins",
      icon: <img src="/quote.png" alt="Twitter" className="w-28" />,
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

  const handleAction = (_action: string) => {
    window.open("https://x.com/Nigecoin", "_blank", "noopener");
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-8 relative">
        <Carousel className="w-full">
          <CarouselContent className="flex space-x-4 overflow-x-auto scroll-pl-4">
            {actionCards.map((card, idx) => (
              <CarouselItem
                key={idx}
                className="flex-shrink-0 w-48 md:w-56 lg:w-60"
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
        </Carousel>
      </div>

      {/* Ways to Earn */}
      {/* <div className="mb-8  "> 
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
      </div> */}

      {/* Recent Activities */}
      <ActivityList activities={activities} />
    </div>
  );
};

export default HomePage;
