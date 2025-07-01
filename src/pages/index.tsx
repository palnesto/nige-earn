import React from "react";
import ActionCard from "@/components/ui/ActionCard";
import ActivityList from "@/components/ActivityList/ActivityList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/Carousel";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";

interface Mention {
  tag: string;
  reward: number;
}
interface Hashtag {
  tag: string;
  reward: number;
}
interface RewardsSettings {
  likeReward: number;
  repostReward: number;
  quoteTweetReward: number;
  replyReward: number;
  mentions: Mention[];
  hashtags: Hashtag[];
}

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
    date: "Aug 08, 2023",
    reward: { amount: 50, status: "success" as const },
  },
  {
    id: "3",
    type: "mention" as const,
    date: "Jul 22, 2023",
    reward: { amount: 50, status: "success" as const },
  },
];

const HomePage: React.FC = () => {
  const { data } = useApiQuery(endpoints.nigeEarn.rewards.list);
  const settings = (data?.data ?? data) as RewardsSettings | undefined;
  const mentions = settings?.mentions ?? [];
  const mentionTags = mentions?.map((m) => m.tag) ?? [];
  const handleAction = () =>
    window.open("https://x.com/Nigecoin", "_blank", "noopener");

  // Build card list once settings are available
  const actionCards = React.useMemo(() => {
    if (!settings) return [];

    const baseCardsGenerator = (tag: string) => [
      {
        title: `Simply like any recent @${tag} post to get rewarded.`,
        gradient: "purplePink" as const,
        icon: <img src="/love.png" alt="Like" className="h-full lg:w-40" />,
        reward: settings.likeReward,
      },
      {
        title: `Retweet any official @${tag} tweet to support the mission and earn coins.`,
        gradient: "tealblue" as const,
        icon: <img src="/retweet.png" alt="Retweet" className="w-28" />,
        reward: settings.repostReward,
      },
      {
        title: `Quote-tweet any @${tag} tweet to share your take.`,
        gradient: "blueTeal" as const,
        icon: <img src="/quote.png" alt="Quote" className="w-28" />,
        reward: settings.quoteTweetReward,
      },
      {
        title: `Drop a genuine reply under @${tag} latest posts.`,
        gradient: "purpleLavender" as const,
        icon: <img src="/Comments.png" alt="Reply" className="w-28" />,
        reward: settings.replyReward,
      },
    ];

    const baseCards = mentionTags?.map(baseCardsGenerator)?.flat();

    const mentionCards = settings?.mentions?.map((m) => ({
      title: `Write Your First Post on X @${m.tag}`,
      gradient: "greenBlue" as const,
      icon: <img src="/x.png" alt={`Mention @${m.tag}`} className="w-32" />,
      reward: m.reward,
    }));

    const hashtagCards = settings.hashtags.map((h) => ({
      title: `Add the hashtag #${h.tag} in your posts to join the movement.`,
      gradient: "brownyellow" as const,
      icon: <img src="/hashtag.png" alt={`#${h.tag}`} className="w-32" />,
      reward: h.reward,
    }));
    return [...baseCards, ...mentionCards, ...hashtagCards].filter(
      (c) => c.reward > 0
    );
  }, [settings]);

  // Embla carousel state
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIdx(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => void api.off("select", onSelect);
  }, [api]);

  if (!settings) return <div>Loading rewards…</div>;

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* ───── ACTION CARDS CAROUSEL ───── */}
      <div className="relative mb-8">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", slidesToScroll: 1, loop: false }}
          className="w-full pb-2"
        >
          <CarouselPrevious className="ml-8 xs:ml-7 z-10" />
          <CarouselNext className="mr-8 xs:mr-7 z-10" />

          <CarouselContent className="-ml-2 lg:-ml-4">
            {actionCards.map((card, idx) => (
              <CarouselItem
                key={idx}
                className="pl-6 pr-5 sm:pl-6 sm:pr-4 lg:pl-9 lg:pr-7 basis-full lg:basis-1/2"
              >
                <ActionCard
                  title={card.title}
                  gradient={card.gradient}
                  buttonText={`Get ${card.reward} coins`}
                  icon={card.icon}
                  onAction={handleAction}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* DOT INDICATORS */}
        <div className="absolute left-1/2 -bottom-2.5 -translate-x-1/2 flex gap-2">
          {actionCards.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === selectedIdx ? "bg-gray-800" : "bg-gray-500/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ───── RECENT ACTIVITIES ───── */}
      <ActivityList activities={activities} />
    </div>
  );
};

export default HomePage;
