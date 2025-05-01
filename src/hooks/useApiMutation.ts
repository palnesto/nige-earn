import { useMutation } from "@tanstack/react-query";
import apiInstance from "@/api/queryClient";
import { appToast } from "@/utils/toast";

function resolveRoute(route: string): string {
  if (route.startsWith("/auth") || route.startsWith("/health-check")) {
    return route;
  }
  return `/nige-earn${route.startsWith("/") ? "" : "/"}${route}`;
}

type HttpMethod = "POST" | "PATCH" | "DELETE";

export const useApiMutation = <TData, TResponse>({
  route,
  method = "POST",
  onSuccess,
  onError,
}: {
  route: string;
  method?: HttpMethod;
  onSuccess?: (data: TResponse) => void;
  onError?: (error: Error) => void;
}) => {
  const path = resolveRoute(route);

  return useMutation({
    mutationFn: async (payload: TData) => {
      switch (method) {
        case "POST": {
          const { data } = await apiInstance.post(path, payload);
          return data as TResponse;
        }
        case "PATCH": {
          const { data } = await apiInstance.patch(path, payload);
          return data as TResponse;
        }
        case "DELETE": {
          const { data } = await apiInstance.delete(path, { data: payload });
          return data as TResponse;
        }
      }
    },
    onSuccess,
    onError: (err: any) => {
      const msg = err?.response?.data?.message ?? "Unexpected error";
      appToast.error(msg);
      onError?.(err);
    },
  });
};
