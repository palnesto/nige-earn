// import ActionCard from "@/components/ui/ActionCard";
// import ActivityList from "@/components/ActivityList/ActivityList";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/Carousel";

// const HomePage: React.FC = () => {
//   // Mock activities data
//   const activities = [
//     {
//       id: "1",
//       type: "share" as const,
//       date: "Sep 18, 2023",
//       reward: { amount: 50, status: "in-transit" as const },
//     },
//     {
//       id: "2",
//       type: "like" as const,
//       date: "August 08, 2023",
//       reward: { amount: 50, status: "success" as const },
//     },
//     {
//       id: "3",
//       type: "mention" as const,
//       date: "July 22, 2023",
//       reward: { amount: 50, status: "success" as const },
//     },
//   ];

//   const actionCards = [
//     {
//       title: "Write Your First Post on X @Nigecoin",
//       gradient: "greenBlue" as const,
//       buttonText: "Get 2 coins",
//       icon: <img src="/x.png" alt="Twitter" className="w-28" />,
//       action: "twitter-post",
//     },
//     {
//       title: "Share your thoughts by quote tweeting any $NIGE tweet.",
//       gradient: "purpleRed" as const,
//       buttonText: "Get 5 coins",
//       icon: <img src="/love.png" alt="Twitter" className="w-28" />,
//       action: "tag-post",
//     },
//     {
//       title: "Simply like any recent @Nigecoin post to get rewarded.",
//       gradient: "purplePink" as const,
//       buttonText: "Get 2 coins",
//       icon: <img src="/quote.png" alt="Twitter" className="h-full w-52" />,
//       action: "share-post",
//     },
//     {
//       title: "Drop a genuine replies under @Nigecoin latest posts.",
//       gradient: "purpleLavender" as const,
//       buttonText: "Get 1 coins",
//       icon: <img src="/Comments.png" alt="Twitter" className="w-28" />,
//       action: "join-conversation",
//     },
//     {
//       title:
//         "Retweet any official @Nigecoin tweet to support the mission and earn coins.",
//       gradient: "blueTeal" as const,
//       buttonText: "Get 4 coins",
//       icon: <img src="/retweet.png" alt="Twitter" className="w-28" />,
//       action: "join-conversation",
//     },
//     {
//       title: "Share your thoughts by quote tweeting any @Nigecoin tweet.",
//       gradient: "blueTeal" as const,
//       buttonText: "Get 5 coins",
//       icon: <img src="/quote.png" alt="Twitter" className="w-28" />,
//       action: "join-conversation",
//     },
//   ];

//   const earnCards = [
//     {
//       title: "Daily Check-in Bonus",
//       gradient: "purple" as const,
//       buttonText: "Claim Now",
//       action: "daily-bonus",
//     },
//     {
//       title: "Complete Profile",
//       gradient: "blue" as const,
//       buttonText: "Start Now",
//       action: "complete-profile",
//     },
//     {
//       title: "Invite Friends",
//       gradient: "teal" as const,
//       buttonText: "Share Link",
//       action: "invite-friends",
//     },
//     {
//       title: "Join Discord",
//       gradient: "purple" as const,
//       buttonText: "Connect",
//       action: "join-discord",
//     },
//     {
//       title: "Follow on X",
//       gradient: "blue" as const,
//       buttonText: "Follow Now",
//       action: "follow-x",
//     },
//     {
//       title: "Join Community",
//       gradient: "teal" as const,
//       buttonText: "Join Now",
//       action: "join-community",
//     },
//   ];

//   const handleAction = (_action: string) => {
//     window.open("https://x.com/Nigecoin", "_blank", "noopener");
//   };

//   return (
//     <div className="@container/main mx-auto px-4 md:px-6">
//       <div className="mb-8 relative">
//         <Carousel className="w-full">
//           <CarouselContent className="flex space-x-4 overflow-x-auto scroll-pl-4">
//             {actionCards.map((card, idx) => (
//               <CarouselItem
//                 key={idx}
//                 className="flex-shrink-0 w-[67%] @md:w-[100%]"
//               >
//                 <ActionCard
//                   title={card.title}
//                   gradient={card.gradient}
//                   buttonText={card.buttonText}
//                   icon={card.icon}
//                   onAction={() => handleAction(card.action)}
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>

//       {/* Ways to Earn */}
//       {/* <div className="mb-8  ">
//         <h2 className="text-xl font-bold mb-4 text-white px-4 pt-4">
//           New Ways to Earn
//         </h2>
//         <Carousel
//           opts={{
//             align: "start",
//             slidesToScroll: 1,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {earnCards.map((card, index) => (
//               <CarouselItem
//                 key={index}
//                 className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3"
//               >
//                 <ActionCard
//                   title={card.title}
//                   gradient={card.gradient}
//                   buttonText={card.buttonText}
//                   onAction={() => handleAction(card.action)}
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div> */}

//       {/* Recent Activities */}
//       <ActivityList activities={activities} />
//     </div>
//   );
// };

// export default HomePage;

// src/pages/index.tsx
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
    buttonText: "Get 2 coins",
    icon: <img src="/x.png" alt="X logo" className="w-28" />,
    action: "twitter-post",
  },
  {
    title: "Share your thoughts by quote tweeting any $NIGE tweet.",
    gradient: "purpleRed" as const,
    buttonText: "Get 5 coins",
    icon: <img src="/love.png" alt="Heart" className="w-28" />,
    action: "tag-post",
  },
  {
    title: "Simply like any recent @Nigecoin post to get rewarded.",
    gradient: "purplePink" as const,
    buttonText: "Get 2 coins",
    icon: <img src="/quote.png" alt="Quote" className="h-full w-52" />,
    action: "like-post",
  },
  {
    title: "Drop a genuine reply under @Nigecoin latest posts.",
    gradient: "purpleLavender" as const,
    buttonText: "Get 1 coin",
    icon: <img src="/Comments.png" alt="Reply" className="w-28" />,
    action: "reply-post",
  },
  {
    title:
      "Retweet any official @Nigecoin tweet to support the mission and earn coins.",
    gradient: "blueTeal" as const,
    buttonText: "Get 4 coins",
    icon: <img src="/retweet.png" alt="Retweet" className="w-28" />,
    action: "retweet-post",
  },
  {
    title: "Quote-tweet any @Nigecoin tweet to share your take.",
    gradient: "blueTeal" as const,
    buttonText: "Get 5 coins",
    icon: <img src="/quote.png" alt="Quote" className="w-28" />,
    action: "quote-post",
  },
];

/* ─────────────────────────  PAGE  ───────────────────────── */
const HomePage: React.FC = () => {
  const handleAction = () =>
    window.open("https://x.com/Nigecoin", "_blank", "noopener");

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
