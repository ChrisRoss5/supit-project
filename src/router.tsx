import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App";
import Pocetna from "./views/Pocetna";

const Prijava = lazy(() => import("./views/Prijava"));
const ONama = lazy(() => import("./views/o-nama/ONama"));
const Novosti = lazy(() => import("./views/novosti/Novosti"));
const Novost = lazy(() => import("./views/novosti/Novost"));
const NastavniPlan = lazy(() => import("./views/NastavniPlan"));

const wrapSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense>
    <Component />{/* no fallback={} on <Suspense> leads to empty screen */}
  </Suspense>
);

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
        element: wrapSuspense(Prijava)
      },
      {
        path: "/registracija",
        element: wrapSuspense(Prijava)
      },
      {
        path: "/o-nama",
        element: wrapSuspense(ONama)
      },
      {
        path: "/novosti",
        element: wrapSuspense(Novosti)
      },
      {
        path: "/novosti/:id",
        element: wrapSuspense(Novost)
      },
      {
        path: "/nastavni-plan",
        element: wrapSuspense(NastavniPlan)
      },
    ],
  },
]);

export default router;
