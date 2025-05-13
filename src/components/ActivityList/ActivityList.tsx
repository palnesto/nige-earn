// src/pages/ActivityList.tsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ActivityItem from "./ActivityItem";
import { Paginator } from "@/components/ui/Pagination";
import endpoints from "@/api/endpoints";
import apiInstance from "@/api/queryClient";

interface RawActivity {
  _id: string;
  amount: number;
  meta?: {
    type?: "like" | "retweet" | "quote" | "mention" | "hashtag" | "reply";
    tweetId?: string;
    originalTweetId?: string;
    quoteTweetId?: string;
    replyId?: string;
    tag?: string;
    tweetCreatedAt?: string;
    replyCreatedAt?: string;
  };
  createdAt?: string;
}

interface Meta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

interface PagedResponse<T> {
  statusCode: number;
  data?: {
    entries?: T[];
    meta?: Meta;
  };
  message?: string;
  success?: boolean;
}

export const ActivityList: React.FC = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const {
    data: paged,
    isLoading,
    isError,
    isFetching,
  } = useQuery<PagedResponse<RawActivity>, Error>({
    queryKey: ["activities", page],
    queryFn: () =>
      apiInstance
        .get<PagedResponse<RawActivity>>(
          `/nige-earn${endpoints.nigeEarn.activities}`,
          {
            params: { page, pageSize },
          }
        )
        .then((res) => res.data),
    placeholderData: (prev) => prev,
  });

  if (isLoading) return <div>Loading…</div>;
  if (isError || !paged?.data) return <div>Error loading activities</div>;

  // Safe destructuring with defaults
  const entries = paged.data.entries ?? [];
  const meta = paged.data.meta ?? {
    total: 0,
    page,
    pageSize,
    totalPages: 0,
  };

  const base = "https://twitter.com/i/web/status/";
  const getDetails = (act: RawActivity) => {
    const type = act.meta?.type;
    const id =
      type === "quote"
        ? act.meta?.quoteTweetId
        : type === "reply"
        ? act.meta?.replyId
        : act.meta?.tweetId;
    const link = id ? base + id : undefined;

    switch (type) {
      case "like":
        return {
          icon: <img src="/love.png" alt="Like" className="h-7 w-7" />,
          label: "You liked a post",
          description: link ? (
            <p className="text-xs text-gray-600">
              You liked an official NIGE tweet.{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-2 py-1 rounded-md"
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
            <p className="text-xs text-gray-600">
              You retweeted an official NIGE tweet.{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-green-50 border-l-4 border-green-300",
        };
      case "quote":
        return {
          icon: <img src="/quote.png" alt="Quote" className="h-7 w-7" />,
          label: "You quote tweeted",
          description: link ? (
            <p className="text-xs text-gray-600">
              You quote tweeted an official NIGE tweet.{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-2 py-1 rounded-md"
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
            <p className="text-xs text-gray-600">
              You mentioned @Nigecoin in an official NIGE tweet.{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-blue-50 border-l-4 border-blue-300",
        };
      case "hashtag":
        return {
          icon: <img src="/hashtag.png" alt="Hashtag" className="h-7 w-7" />,
          label: `You used #${act.meta?.tag}`,
          description: link ? (
            <p className="text-xs text-gray-600">
              You used #{act.meta?.tag} in an official NIGE tweet.{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-purple-50 border-l-4 border-purple-300",
        };
      case "reply":
        return {
          icon: <img src="/Comments.png" alt="Reply" className="h-7 w-7" />,
          label: "You replied to a post",
          description: link ? (
            <p className="text-xs text-gray-600">
              You replied to an official NIGE tweet.{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 border px-2 py-1 rounded-md"
              >
                View Tweet
              </a>
            </p>
          ) : null,
          cardClass: "bg-indigo-50 border-l-4 border-indigo-300",
        };
      default:
        return {
          icon: null,
          label: "",
          description: null,
          cardClass: "",
        };
    }
  };

  return (
    <div className="mt-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 text-xs sm:text-sm rounded-full mb-5">
        Kindly note that your points will be updated and reflected in your
        account within a few hours.
      </div>

      <h2 className="text-xl font-bold mb-4">Recent Activities</h2>

      <div className="space-y-5">
        {entries.map((act) => {
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
          currentPage={meta.page}
          totalPages={meta.totalPages}
          onPageChange={setPage}
        />
      </div>

      {isFetching && (
        <div className="text-center py-2 text-sm text-gray-500">
          Loading page {page + 1}…
        </div>
      )}
    </div>
  );
};

export default ActivityList;
