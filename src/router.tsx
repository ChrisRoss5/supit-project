import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pocetna from "@/views/Pocetna";
import Prijava from "@/views/Prijava";
import ONama from "@/views/o-nama/ONama";
import Novosti from "@/views/novosti/Novosti";
import Novost from "@/views/novosti/Novost";
import NastavniPlan from "@/views/NastavniPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
        <Contact />
      </>
    ),
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
