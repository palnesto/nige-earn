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

/* ─────────────────────────  MOCK DATA  ───────────────────────── */
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

const actionCards = [
  {
    title: "Write Your First Post on X @Nigecoin",
    gradient: "greenBlue" as const,
    buttonText: "Get 50 coins",
    icon: <img src="/x.png" alt="X logo" className="w-28" />,
    action: "twitter-post",
  },

  {
    title: "Write Your First Post on X @StephySamavi",
    gradient: "greenBlue" as const,
    buttonText: "Get 25 coins",
    icon: <img src="/x.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Simply like any recent @Nigecoin post to get rewarded.",
    gradient: "purplePink" as const,
    buttonText: "Get 10 coins",
    icon: <img src="/love.png" alt="Quote" className="h-full lg:w-40" />,
    action: "like-post",
  },
  {
    title: "Drop a genuine reply under @Nigecoin latest posts.",
    gradient: "purpleLavender" as const,
    buttonText: "Get 20 coin",
    icon: <img src="/Comments.png" alt="Reply" className="w-28" />,
    action: "reply-post",
  },

  {
    title:
      "Retweet any official @Nigecoin tweet to support the mission and earn coins.",
    gradient: "blueTeal" as const,
    buttonText: "Get 30 coins",
    icon: <img src="/retweet.png" alt="Retweet" className="w-28" />,
    action: "retweet-post",
  },
  {
    title: "Quote-tweet any @Nigecoin tweet to share your take.",
    gradient: "blueTeal" as const,
    buttonText: "Get 40 coins",
    icon: <img src="/quote.png" alt="Quote" className="w-28" />,
    action: "quote-post",
  },
  {
    title: "Add the hashtag #Nige in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 25 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #Nigent in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 20 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #NigeLink in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 20 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #NigeTrade in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 20 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #NigeLearn in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 20 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #NigeGlobal in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 20 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #Nigents in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 20 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
  {
    title: "Add the hashtag #$Nige in your posts to join the movement.",
    gradient: "tealblue" as const,
    buttonText: "Get 25 coins",
    icon: <img src="/hashtag.png" alt="Heart" className="w-32" />,
    action: "tag-post",
  },
];

/* ─────────────────────────  PAGE  ───────────────────────── */
const HomePage: React.FC = () => {
  const handleAction = () =>
    window.open("https://x.com/Nigeearn", "_blank", "noopener");

  /* capture Embla API to drive dot indicators */
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIdx(api.selectedScrollSnap());
    api.on("select", onSelect); // update on scroll / button press
    onSelect(); // initial
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* ─────────────── ACTION CARDS CAROUSEL ─────────────── */}
      <div className="relative mb-8">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", slidesToScroll: 1, loop: false }}
          className="w-full pb-2"
        >
          {/* LEFT / RIGHT BUTTONS */}
          <CarouselPrevious className="ml-8 xs:ml-7 z-10" />
          <CarouselNext className="mr-8 xs:mr-7 z-10" />

          <CarouselContent className="-ml-2 lg:-ml-4">
            {actionCards.map((card, idx) => (
              <CarouselItem
                key={idx}
                /* one card on mobile, two cards from lg up */
                className="pl-6 pr-5 sm:pl-6 sm:pr-4 lg:pl-9 lg:pr-7 basis-full lg:basis-1/2"
              >
                <ActionCard
                  title={card.title}
                  gradient={card.gradient}
                  buttonText={card.buttonText}
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
              className={`h-1.5 w-1.5 rounded-full transition-colors  ${
                i === selectedIdx ? "bg-gray-800" : "bg-gray-500/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ─────────────── RECENT ACTIVITIES ─────────────── */}
      <ActivityList activities={activities} />
    </div>
  );
};

export default HomePage;
