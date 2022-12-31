import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("main", () => {
  const isContactOpen = ref(false);
  return { isContactOpen };
});
