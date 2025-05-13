import { useMemo, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useAuthStore } from "@/stores/useAuthStore";
import endpoints from "@/api/endpoints";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const setUser = useAuthStore((s) => s.setUser);
  const user = useAuthStore((s) => s.user);
  const { data, isLoading, isError } = useApiQuery(
    endpoints.globalRoutes.auth.status
  );
  const responseUser = useMemo(() => data?.data?.user, [data]);
  useEffect(() => {
    if (isLoading) return;

    if (isError || !responseUser) {
      setUser(null);
    } else if (!user) {
      setUser(responseUser);
    }
  }, [isLoading, isError, responseUser, setUser, user]);
  if (isLoading) {
    return <div className="p-6 text-center">Checking session…</div>;
  }
  if (isError || !responseUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
