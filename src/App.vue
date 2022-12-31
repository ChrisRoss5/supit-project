<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"
import Contact from "./components/Contact.vue"
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <Contact />
</template>