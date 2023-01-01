<template>
  <main>
    <div class="main-img">
      <img
        class="w-full"
        src="@/assets/img/kampus-iz-zraka-min-1.jpg"
        alt="campus"
      />
    </div>
    <h1 class="main-title">O nama</h1>
    <section v-for="section in sections" :id="section.id">
      <h2
        class="relative my-4 py-4 text-center text-3xl lg:bg-transparent"
        :style="{
          'background-color': section.toggled ? 'var(--purple-02)' : '',
        }"
      >
        <button
          class="absolute inset-0 lg:hidden"
          @click="section.toggled = !section.toggled"
        ></button>
        <span class="material-icons align-middle text-3xl">
          {{ section.icon }}
        </span>
        {{ section.title }}
      </h2>
      <component
        :is="section.component"
        :class="{ hidden: !section.toggled }"
        class="lg:block"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import AlgebraGrupa from "@/views/o-nama/AlgebraGrupa.vue";
import KakoDoNas from "@/views/o-nama/KakoDoNas.vue";
import Povijest from "@/views/o-nama/Povijest.vue";
import NaseVrijednosti from "@/views/o-nama/NaseVrijednosti.vue";
import { type Component, reactive, markRaw } from "vue";

const sections: {
  component: Component;
  id: string;
  title: string;
  icon: string;
  toggled?: boolean;
}[] = reactive([
  {
    component: markRaw(NaseVrijednosti),
    id: "nase-vrijednosti",
    title: "Naše vrijednosti",
    icon: "flash_on",
  },
  {
    component: markRaw(Povijest),
    id: "povijest",
    title: "Povijest",
    icon: "history",
  },
  {
    component: markRaw(AlgebraGrupa),
    id: "algebra-grupa",
    title: "Algebra grupa",
    icon: "group",
  },
  {
    component: markRaw(KakoDoNas),
    id: "kako-do-nas",
    title: "Kako do nas",
    icon: "explore",
  },
]);
</script>

<style scoped>
h2 {
  color: var(--purple);
  text-shadow: var(--black-text-shadow);
}
</style>
