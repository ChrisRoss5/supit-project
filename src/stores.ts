import { navigateTo } from "svelte-router-spa";
import { writable, derived } from "svelte/store";
import type { User } from "@/types";

const { token, username } = localStorage;

function createUser() {
  const { subscribe, set, update } = writable<User>({ token, username });

  return {
    subscribe,
    signIn: (user: User) => {
      set(user);
      localStorage.setItem("username", user.username);
      localStorage.setItem("token", user.token);
    },
    signOut: () => {
      update((user) => ({ ...user, token: "" }));
      localStorage.clear();
      navigateTo("/");
    },
  };
}

export const isContactOpen = writable(false);
export const user = createUser();
export const isSignedIn = derived(user, ($user) => !!$user.token);
