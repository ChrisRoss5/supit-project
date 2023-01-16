import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Pocetna from "@/views/Pocetna";
import Prijava from "@/views/Prijava";
import ONama from "@/views/o-nama/ONama";
import Novosti from "@/views/novosti/Novosti";
import Novost from "@/views/novosti/Novost";
import NastavniPlan from "@/views/NastavniPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App notFound={true} />,
    children: [
      {
        path: "/",
        element: <Pocetna />,
      },
      {
        path: "/prijava",
        element: <Prijava />,
      },
      {
        path: "/registracija",
        element: <Prijava />,
      },
      {
        path: "/o-nama",
        element: <ONama />,
      },
      {
        path: "/novosti",
        element: <Novosti />,
      },
      {
        path: "/novosti/:id",
        element: <Novost />,
      },
      {
        path: "/nastavni-plan",
        element: <NastavniPlan />,
      },
    ],
  },
]);

export default router;
