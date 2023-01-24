import { createRouter, createWebHistory } from "vue-router";
import Pocetna from "@/views/Pocetna.vue";

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
    component: () => import("@/views/Prijava.vue"),
    name: "prijava",
  },
  {
    path: "/registracija",
    component: () => import("@/views/Prijava.vue"),
    name: "registracija",
  },
  {
    path: "/o-nama",
    component: () => import("@/views/o-nama/ONama.vue"),
    name: "o-nama",
  },
  {
    path: "/novosti",
    component: () => import("@/views/novosti/Novosti.vue"),
  },
  {
    path: "/novosti/:id",
    component: () => import("@/views/novosti/Novost.vue"),
  },
  {
    path: "/nastavni-plan",
    component: () => import("@/views/NastavniPlan.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
