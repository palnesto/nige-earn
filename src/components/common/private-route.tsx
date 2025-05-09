// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const setUser = useAuthStore((s) => s.setUser);
  const user = useAuthStore((s) => s.user);

  // 1) Fire off the status check
  const { data, isLoading, isError } = useApiQuery(
    endpoints.globalRoutes.auth.status
  );

  const responseUser = useMemo(() => data?.data?.user, [data]);

  // 2) While it’s loading, show a placeholder
  if (isLoading) {
    return <div className="p-6 text-center">Checking session…</div>;
  }

  // 3) If it errored or returned no user, clear state + redirect
  if (isError || !responseUser) {
    setUser(null);
    return <Navigate to="/login" replace />;
  }

  // 4) If we got a user and haven’t stored it yet, store it
  if (!user) {
    setUser(responseUser);
  }

  // 5) Finally render protected content
  return children;
}
