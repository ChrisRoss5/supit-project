import { createRouter, createWebHistory } from "vue-router";

import Pocetna from "@/views/Pocetna.vue";
import Prijava from "@/views/Prijava.vue";
import ONama from "@/views/o-nama/ONama.vue";
import Novosti from "@/views/novosti/Novosti.vue";
import Novost from "@/views/novosti/Novost.vue";
import NastavniPlan from "@/views/NastavniPlan.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: {
      template: /* html */ `
      <h1 className="grid flex-1 place-items-center text-xl">
        404 — Stranica ne postoji
      </h1>`,
    },
  },
  {
    path: "/",
    component: Pocetna,
    name: "pocetna",
  },
  {
    path: "/prijava",
    component: Prijava,
    name: "prijava",
  },
  {
    path: "/registracija",
    component: Prijava,
    name: "registracija",
  },
  {
    path: "/o-nama",
    component: ONama,
    name: "o-nama",
  },
  {
    path: "/novosti",
    component: Novosti,
  },
  {
    path: "/novosti/:id",
    component: Novost,
  },
  {
    path: "/nastavni-plan",
    component: NastavniPlan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
