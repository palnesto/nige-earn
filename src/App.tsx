// src/App.tsx
import { Suspense, useMemo } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "~react-pages";
import AppLayout from "./layouts/AppLayout";
import { PrivateRoute } from "./components/common/private-route";

export function App() {
  const location = useLocation();
  const appRoutes = useRoutes(routes);

  // Routes that should remain public (no auth, no layout)
  const publicPaths = useMemo(() => ["/login", "/signup"], []);

  const isPublic = publicPaths.includes(location.pathname);

  return (
    <Suspense fallback={<p>Loading…</p>}>
      {isPublic ? (
        // Public pages render straight
        appRoutes
      ) : (
        // All other pages are wrapped in PrivateRoute + AppLayout
        <PrivateRoute>
          <AppLayout>{appRoutes}</AppLayout>
        </PrivateRoute>
      )}
    </Suspense>
  );
}
