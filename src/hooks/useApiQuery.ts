import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import apiInstance from "@/api/queryClient";

/**
 * Build the correct path for this front-end.
 *  – Anything starting with “/auth” or “/health-check” is global → leave alone
 *  – Everything else is assumed to be Nige-Earn → auto-prefix `/nige-earn`
 */
function resolveRoute(route: string): string {
  if (route.startsWith("/auth") || route.startsWith("/health-check")) {
    return route;
  }
  // Ensure exactly one slash between the prefix and the route
  return `/nige-earn${route.startsWith("/") ? "" : "/"}${route}`;
}

/** Wrapper around tanstack-query that automatically prefixes Nige-Earn routes */
export const useApiQuery = (
  route: string,
  options?: UseQueryOptions<any, any>
) => {
  return useQuery({
    queryKey: [route],
    queryFn: async () => {
      const path = resolveRoute(route);
      const { data } = await apiInstance.get(path);
      return data;
    },
    retry: false,
    ...options,
  });
};
