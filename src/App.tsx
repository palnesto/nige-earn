import { Suspense } from "react";

export function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <ApplicationFooter>{appRoutes}</ApplicationFooter> */}
      hello
    </Suspense>
  );
}
