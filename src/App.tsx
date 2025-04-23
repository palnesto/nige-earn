import { Suspense, useEffect, useMemo, useState } from "react";
import routes from "~react-pages";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

export function App() {
  const location = useLocation();
  const [isLoggedIn] = useState<boolean>(true); // dummy to indicate if user is logged in

  const navigate = useNavigate();
  const appRoutes = useRoutes(routes);
  // Define routes that should not have a layout
  const noLayoutRoutes = useMemo(() => ["/login", "/signup"], []);

  // Check if the current route matches any of the no-layout routes
  const isNoLayoutPage = noLayoutRoutes.includes(location.pathname);

  useEffect(() => {
    if (!isLoggedIn && !noLayoutRoutes.includes(location.pathname)) {
      navigate("/login");
    } else if (isLoggedIn && noLayoutRoutes.includes(location.pathname)) {
      navigate("/");
    }
  }, [isLoggedIn, location.pathname, navigate, noLayoutRoutes]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {isNoLayoutPage ? appRoutes : <AppLayout>{appRoutes}</AppLayout>}
    </Suspense>
  );
}
