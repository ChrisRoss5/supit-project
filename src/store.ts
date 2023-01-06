import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import type { User } from "@/types";

export const useStore = defineStore("main", () => {
  const router = useRouter();
  const isContactOpen = ref(false);
  const { token, username } = localStorage;
  const user: User = reactive({ token, username });
  const isSignedIn = computed(() => !!user.token);

  function signIn(_user: User) {
    Object.assign(user, _user);
    localStorage.setItem("username", user.username);
    localStorage.setItem("token", user.token);
  }

  function signOut() {
    user.token = "";
    localStorage.clear();
    router.push("/");
  }

  return { isContactOpen, user, isSignedIn, signIn, signOut };
});
