<template>
  <RouterLink
    v-for="{ href, label, icon } in links"
    :to="href"
    class="nav-btn"
    @click="isMobileView && $emit('close')"
  >
    <span class="material-icons pr-2" :class="{ 'my-2': isMobileView }">{{
      icon
    }}</span>
    <span>{{ label }}</span>
  </RouterLink>
  <button class="nav-btn w-full" @click="store.isContactOpen = true">
    <span class="material-icons pr-2" :class="{ 'my-2': isMobileView }">
      email
    </span>
    <span>Kontakt</span>
  </button>
</template>

<script setup lang="ts">
import { useStore } from "@/store";

defineProps<{ isMobileView?: boolean }>();
defineEmits<{ (event: "close"): void }>();
const links = [
  { href: "/", label: "Početna", icon: "home" },
  { href: "/o-nama", label: "O nama", icon: "insert_comment" },
  { href: "/novosti", label: "Novosti", icon: "info" },
  { href: "/nastavni-plan", label: "Nastavni plan", icon: "calendar_today" },
];
const store = useStore();
</script>
