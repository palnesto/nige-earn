import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
export function App() {
  const appRoutes = useRoutes(routes);
  return <Suspense fallback={<p>Loading...</p>}>{appRoutes}</Suspense>;
}
