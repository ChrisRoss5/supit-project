import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App";
import Pocetna from "./views/Pocetna";

function lazyLoad(path: string) {
  const LazyElement = lazy(() => import(`./views/${path}` /* @vite-ignore */));

  return (
    /* no fallback={} on suspense => empty screen */
    <Suspense>
      <LazyElement />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App notFound />,
    children: [
      {
        path: "/",
        element: <Pocetna />,
      },
      {
        path: "/prijava",
        element: lazyLoad("Prijava"),
      },
      {
        path: "/registracija",
        element: lazyLoad("Prijava"),
      },
      {
        path: "/o-nama",
        element: lazyLoad("o-nama/ONama"),
      },
      {
        path: "/novosti",
        element: lazyLoad("novosti/Novosti"),
      },
      {
        path: "/novosti/:id",
        element: lazyLoad("novosti/Novost"),
      },
      {
        path: "/nastavni-plan",
        element: lazyLoad("NastavniPlan"),
      },
    ],
  },
]);

export default router;
