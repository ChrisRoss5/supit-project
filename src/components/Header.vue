<template>
  <header class="sticky top-0 z-40 overflow-hidden bg-neutral-800">
    <nav
      class="flex flex-col flex-wrap whitespace-nowrap py-2 px-5 text-neutral-400 lg:flex-row lg:gap-4 lg:py-5 lg:px-10"
    >
      <div class="flex place-content-between place-items-center">
        <button class="lg:hidden" @click="isNavbarExpanded = !isNavbarExpanded">
          <span class="material-icons align-middle text-4xl">
            {{ isNavbarExpanded ? "close" : "menu" }}
          </span>
        </button>
        <button v-if="store.isSignedIn" class="nav-btn" @click="store.signOut">
          <span class="material-icons rotate-180 pl-2"> logout </span>
          <span>Odjavi</span>
          <span class="pl-2 text-cyan-400">{{ store.user.username }}</span>
        </button>
        <RouterLink v-else to="/prijava" class="nav-btn">
          <span>Prijavi se</span>
          <span class="material-icons pl-2 text-cyan-400"> login </span>
        </RouterLink>
      </div>
      <Transition name="nav-mobile">
        <div
          v-show="isNavbarExpanded"
          class="max-h-52 pt-2 transition-all duration-500 lg:hidden"
        >
          <HeaderLinks isMobileView @close="isNavbarExpanded = false" />
        </div>
      </Transition>
      <div class="hidden lg:flex">
        <HeaderLinks />
      </div>
      <Transition name="nav-hash">
        <div
          v-show="$route.name == 'o-nama'"
          class="ml-auto hidden gap-3 transition-all duration-500 lg:my-0 lg:flex lg:gap-0"
        >
          <RouterLink
            v-for="{ hash, label } in hashes"
            :to="{ hash }"
            class="nav-btn hash-btn"
            :class="{ 'text-white': $route.hash == hash }"
            @click="scrollToHash(hash)"
          >
            <span>{{ label }}</span>
          </RouterLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderLinks from "./HeaderLinks.vue";
import { useStore } from "@/store";

const store = useStore();
const isNavbarExpanded = ref(false);
const hashes = [
  { hash: "#nase-vrijednosti", label: "Naše vrijednosti" },
  { hash: "#povijest", label: "Povijest" },
  { hash: "#algebra-grupa", label: "Algebra grupa" },
  { hash: "#kako-do-nas", label: "Kako do nas" },
];

function scrollToHash(hash: string) {
  window.scrollTo({
    top:
      document.querySelector(hash)!.getBoundingClientRect().top +
      window.scrollY -
      document.querySelector("header")!.offsetHeight,
    behavior: "smooth",
  });
}
</script>

<style>
.nav-btn {
  @apply flex items-center transition-colors hover:text-neutral-300 lg:px-4;
}
.nav-mobile-enter-from,
.nav-mobile-leave-to {
  opacity: 0;
  max-height: 0;
  padding: 0;
}
.nav-hash-enter-active,
.nav-hash-leave-active {
  transition-timing-function: cubic-bezier(0.7, 1.89, 0.48, 0.6);
}
.nav-hash-enter-from,
.nav-hash-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
