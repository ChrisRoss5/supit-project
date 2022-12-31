<template>
  <main
    class="m-auto w-full max-w-lg animate-reset p-3 opacity-0"
    :key="isLogin + ''"
  >
    <div class="mb-4 text-lg font-bold">
      {{ isLogin ? "PRIJAVA" : "REGISTRACIJA" }} KORISNIKA
    </div>
    <form
      id="auth"
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
        class="w-full rounded-md bg-neutral-700 px-4 py-2 text-white"
      >
        {{ isLogin ? "Prijavi" : "Registriraj" }} se
      </button>
      <div
        id="success"
        class="text-danger"
        :class="{ hidden: !formStatus.success }"
      >
        Uspješna prijava :) Na početnu stranicu za 3,2,1...
      </div>
      <div
        id="error"
        class="text-danger"
        :class="{ hidden: !formStatus.error }"
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
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";

const api = "https://www.fulek.com/data/api/user/";
const route = useRoute();
const isLogin = computed(() => route.name == "prijava");
const formAction = computed(() => api + (isLogin.value ? "login" : "register"));
const form = reactive({
  username: "",
  password: "",
});
const formStatus = reactive({
  success: false,
  error: false,
});

async function onSubmit() {
  console.log(formAction.value);
  console.log(JSON.stringify(form));

  const response = await fetch(formAction.value, {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
  const { data } = await response.json();

  /* if (!response.isSuccess) {
      $("#error").show().html(response.errorMessages.join("<br>"));
      enableButton($submitBtn);
      return;
    }
    if (!response.data) {
      replaceRoute("/prijava");
      return;
    }
    $("#success").show().next().hide();
    signIn(response.data);
    setTimeout(() => {
      if (location.pathname == "/prijava") replaceRoute("/");
    }, 3000); */

  console.log(response, data);
}
</script>
