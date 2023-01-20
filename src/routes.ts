/* import NastavniPlan from "@/views/NastavniPlan.svelte";
import Novost from "@/views/novosti/Novost.svelte";
import Novosti from "@/views/novosti/Novosti.svelte";
import ONama from "@/views/o-nama/ONama.svelte";*/
import Prijava from "@/views/Prijava.svelte";
import Pocetna from "@/views/Pocetna.svelte";
import Layout from "@/Layout.svelte";

const routes = [
  {
    name: "404",
    redirectTo: "/",
  },
  {
    name: `/`,
    layout: Layout,
    nestedRoutes: [
      {
        name: "index",
        component: Pocetna,
      },
      {
        name: "prijava",
        component: Prijava,
      },
    ],
  },
  /*

  {
    name: "/registracija",
    component: Prijava,
  },
  {
    name: "/o-nama",
    component: ONama,
  },
  {
    name: "/novosti",
    component: Novosti,
  },
  {
    name: "/novosti/:id",
    component: Novost,
  },
  {
    name: "/nastavni-plan",
    component: NastavniPlan,
  }, */
];

export { routes };
