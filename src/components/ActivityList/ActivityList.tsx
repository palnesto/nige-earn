import { useState } from "react";
import { useApiQuery } from "@/hooks/useApiQuery";
import ActivityItem from "./ActivityItem";
import endpoints from "@/api/endpoints";
import { Paginator } from "@/components/ui/Pagination";

interface RawActivity {
  _id: string;
  amount: number;
  meta: {
    type: "like" | "retweet" | "quote" | "mention" | "hashtag" | "reply";
    tweetId?: string;
    originalTweetId?: string;
    quoteTweetId?: string;
    replyId?: string;
    tag?: string;
    tweetCreatedAt?: string;
    replyCreatedAt?: string;
  };
  createdAt: string;
}

interface ApiResponse {
  statusCode: number;
  data: RawActivity[];
  message: string;
  success: boolean;
}

const ActivityList: React.FC = () => {
  const { data, isLoading, isError } = useApiQuery<ApiResponse>(
    endpoints.nigeEarn.activities
  );
  const [page, setPage] = useState(1);
  const pageSize = 10;

  if (isLoading) return <div>Loading…</div>;
  if (isError || !data) return <div>Error</div>;

  const all = data.data;
  const pageCount = Math.ceil(all.length / pageSize);
  const slice = all.slice((page - 1) * pageSize, page * pageSize);

  const base = "https://twitter.com/i/web/status/";
  const getDetails = (act: RawActivity) => {
    const link = (
      act.meta.type === "quote"
        ? act.meta.quoteTweetId
        : act.meta.type === "reply"
        ? act.meta.replyId
        : act.meta.tweetId
    )
      ? base +
        (act.meta.type === "quote"
          ? act.meta.quoteTweetId
          : act.meta.type === "reply"
          ? act.meta.replyId
          : act.meta.tweetId)
      : undefined;

    switch (act.meta.type) {
      case "like":
        return {
          icon: <img src="/love.png" alt="Like" className="h-7 w-7" />,
          label: "You liked a post",
          description: link ? (
            <p className="text-[0.55rem] sm:text-xs text-gray-600">
              You liked an official NIGE tweet.
              <br className="xs:hidden" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-1 sm:px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-red-50 border-l-4 border-red-300",
        };
      case "retweet":
        return {
          icon: <img src="/retweet.png" alt="Retweet" className="h-7 w-7" />,
          label: "You retweeted a post",
          description: link ? (
            <p className="text-[0.55rem] sm:text-xs text-gray-600">
              You retweeted an official NIGE tweet. <br className="xs:hidden" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-1 sm:px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-green-50 border-l-4 border-green-300",
        };
      case "quote":
        return {
          icon: <img src="/quote.png" alt="Quote" className="w-7 h-7" />,
          label: "You quote tweeted",
          description: link ? (
            <p className="text-gray-600 text-[0.55rem] sm:text-xs space-x-1 space-y-1">
              You quote tweeted an official NIGE tweet.
              <br className="xs:hidden" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-1 sm:px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-yellow-50 border-l-4 border-yellow-300",
        };
      case "mention":
        return {
          icon: <img src="/at.png" alt="Mention" className="h-7 w-7" />,
          label: `You mentioned @Nigecoin`,
          description: link ? (
            <p className="text-[0.55rem] sm:text-xs text-gray-600">
              You mentioned @Nigecoin in an official NIGE tweet.{" "}
              <br className="xs:hidden" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-1 sm:px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-blue-50 border-l-4 border-blue-300",
        };
      case "hashtag":
        return {
          icon: <img src="/hashtag.png" alt="Hashtag" className="w-7 h-7" />,
          label: `You used #${act.meta.tag}`,
          description: link ? (
            <p className="text-[0.55rem] sm:text-xs text-gray-600">
              You used #{act.meta.tag} in an official NIGE tweet.{" "}
              <br className="xs:hidden" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-1 sm:px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-purple-50 border-l-4 border-purple-300",
        };
      case "reply":
        return {
          icon: <img src="/Comments.png" alt="Reply" className="w-7 h-7" />,
          label: "You replied to a post",
          description: link ? (
            <p className="text-[0.55rem] sm:text-xs text-gray-600">
              You replied to an official NIGE tweet.{" "}
              <br className="xs:hidden" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-1 sm:px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-indigo-50 border-l-4 border-indigo-300",
        };
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
      <div className="space-y-5">
        {slice.map((act) => {
          const { icon, label, description, cardClass } = getDetails(act);
          return (
            <ActivityItem
              key={act._id}
              icon={icon}
              label={label}
              description={description}
              amount={act.amount}
              date={act.createdAt}
              cardClass={cardClass}
            />
          );
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <Paginator
          currentPage={page}
          totalPages={pageCount}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ActivityList;
