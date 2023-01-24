<template>
  <Header />
  <RouterView />
  <Footer />
  <Contact v-if="isContactLoaded" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { useStore } from "@/store";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const Contact = defineAsyncComponent(() => import("./components/Contact.vue"));
const store = useStore();
const isContactLoaded = ref(false); // keeps the component alive to allow transitions

watch(
  () => store.isContactOpen,
  () => (isContactLoaded.value = true)
);
</script>
