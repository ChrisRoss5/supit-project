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
    <section
      v-for="section in sections"
      :id="section.id"
      class="transition duration-1000"
    >
      <h2
        class="black-text-shadow relative py-8 text-center text-3xl font-semibold text-[var(--purple)] lg:bg-transparent"
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
import AlgebraGrupa from "@/views/o-nama/sections/AlgebraGrupa.vue";
import KakoDoNas from "@/views/o-nama/sections/KakoDoNas.vue";
import Povijest from "@/views/o-nama/sections/Povijest.vue";
import NaseVrijednosti from "@/views/o-nama/sections/NaseVrijednosti.vue";
import { type Component, reactive, markRaw, onMounted } from "vue";

const sectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    target.classList[isIntersecting ? "add" : "remove"]("section-visible");
  });
});

onMounted(() => {
  document.querySelectorAll("section").forEach((section) => {
    sectionsObserver.observe(section);
  });
});

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
:deep(.cursive) {
  @apply mb-8 bg-gray-50 py-8 px-5;
  font: 1.5rem "Dancing Script", cursive;
}
section:not(.section-visible) {
  opacity: 0;
}
</style>
