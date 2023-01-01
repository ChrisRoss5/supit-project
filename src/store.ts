import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import router from "./router";

export interface User {
  username: string;
  token: string;
}

export const useStore = defineStore("main", () => {
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
