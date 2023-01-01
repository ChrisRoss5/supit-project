<template>
  <main
    class="m-auto w-full max-w-lg animate-reset p-3 opacity-0"
    :key="isLogin + ''"
  >
    <div class="mb-4 text-lg font-bold">
      {{ isLogin ? "PRIJAVA" : "REGISTRACIJA" }} KORISNIKA
    </div>
    <form
      :action="formAction"
      method="post"
      spellcheck="false"
      autocomplete="true"
      @submit.prevent="onSubmit"
    >
      <div class="mb-3">
        <label for="username" class="mb-2 block text-sm font-bold text-gray-900"
          >Korisničko ime:</label
        >
        <input
          type="email"
          name="username"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
          title="Ovo polje je obavezno!"
          placeholder="E-mail adresa..."
          oninvalid="this.setCustomValidity('Neispravan email!')"
          oninput="this.setCustomValidity('')"
          required
          v-model.trim="form.username"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="mb-2 block text-sm font-bold text-gray-900"
          >Lozinka:</label
        >
        <input
          type="password"
          name="password"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
          title="Ovo polje je obavezno!"
          oninvalid="this.setCustomValidity('Ispunite ovo polje!')"
          oninput="this.setCustomValidity('')"
          required
          v-model="form.password"
        />
      </div>
      <button
        type="submit"
        class="mb-2 w-full rounded-md border-4 border-transparent bg-neutral-700 px-4 py-2 text-white transition-all duration-150 hover:bg-neutral-600"
        :class="{
          ' !border-neutral-300 !bg-white text-black': isSubmitting,
        }"
        :disabled="isSubmitting"
      >
        {{ isLogin ? "Prijavi" : "Registriraj" }} se
      </button>
      <div class="text-red-500" v-show="formResponse.isSuccess">
        Uspješna prijava :) Na početnu stranicu za 3,2,1...
      </div>
      <div
        class="text-red-500"
        v-show="formResponse.errorMessages.length"
        v-html="formResponse.errorMessages.join('<br />')"
      ></div>
      <div v-show="isLogin" class="pt-3">
        Nemaš račun?
        <RouterLink to="/registracija" class="font-bold text-blue-500"
          >Registriraj se</RouterLink
        >
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";
import { User, useStore } from "@/store";

const store = useStore();
const route = useRoute();
const router = useRouter();
const isLogin = computed(() => route.name == "prijava");
const form = reactive({ username: "", password: "" });
const formAction = computed(
  () =>
    "https://www.fulek.com/data/api/user/" +
    (isLogin.value ? "login" : "register")
);
const formResponse = reactive({
  isSuccess: false,
  errorMessages: [] as string[],
  data: null as null | User,
  statusCode: 0,
});
const isSubmitting = ref(false);

async function onSubmit() {
  isSubmitting.value = true;
  const response = await fetch(formAction.value, {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
  isSubmitting.value = false;
  Object.assign(formResponse, await response.json());
  if (!formResponse.isSuccess) return;
  if (!formResponse.data) return router.push("/prijava");
  setTimeout(() => isLogin.value && router.push("/"), 3000);
  store.signIn(formResponse.data);
}
</script>
