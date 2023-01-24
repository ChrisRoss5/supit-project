<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useStore } from "@/store";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const Contact = defineAsyncComponent(() => import("./components/Contact.vue"));
const store = useStore();
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <Contact v-if="store.isContactOpen" />
</template>
