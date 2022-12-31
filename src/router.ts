import { createRouter, createWebHistory } from "vue-router";

import Pocetna from "@/views/Pocetna.vue";
import NastavniPlan from "@/views/NastavniPlan.vue";
import Novosti from "@/views/Novosti.vue";
import ONama from "@/views/ONama.vue";
import Prijava from "@/views/Prijava.vue";

const routes = [
  {
    path: "/",
    component: Pocetna,
    name: "pocetna",
  },
  {
    path: "/prijava",
    component: Prijava,
    name: "prijava"
  },
  {
    path: "/registracija",
    component: Prijava,
    name: "registracija"
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
    path: "/nastavni-plan",
    component: NastavniPlan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
