import { z } from "zod";

export type QueryParams = {
  monthly?: boolean;
  month?: number;
  year?: number;
};
export const nigeEarn = {
  leaderboard: ({
    queryParams: { monthly, month, year },
  }: {
    queryParams: QueryParams;
  }) => {
    const baseUrl = "/leaderboard";
    if (monthly) {
      return `${baseUrl}?monthly=${monthly.toString()}`;
    }
    const monthZod = z.number().int().min(0).max(11);
    const yearZod = z.number().int().min(0);
    const safeMonth = monthZod.safeParse(month);
    const safeYear = yearZod.safeParse(year);
    if (safeMonth.success && safeYear.success) {
      return `${baseUrl}?month=${safeMonth.data}&year=${safeYear.data}`;
    }
    return baseUrl;
  },
  activities: "/activities",
  rewards: {
    list: "/reward-settings",
  },
};
