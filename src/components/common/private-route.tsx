// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useAuthStore } from "@/stores/useAuthStore";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const setUser = useAuthStore((s) => s.setUser);
  const user = useAuthStore((s) => s.user);

  // 1) Fire off the status check
  const { data, isLoading, isError } = useApiQuery("/auth/status");

  // 2) While it’s loading, show a placeholder
  if (isLoading) {
    return <div className="p-6 text-center">Checking session…</div>;
  }

  // 3) If it errored or returned no user, clear state + redirect
  if (isError || !data?.data?.user) {
    setUser(null);
    return <Navigate to="/login" replace />;
  }

  // 4) If we got a user and haven’t stored it yet, store it
  if (!user) {
    setUser(data?.data?.user);
  }

  // 5) Finally render protected content
  return children;
}
