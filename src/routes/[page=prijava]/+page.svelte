<script lang="ts">
  import { validate } from "@/utils";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { user } from "@/stores";
  import type { APICall, User } from "@/types";

  $: isLogin = $page.params.page == "prijava";
  $: formAction =
    "https://www.fulek.com/data/api/user/" + (isLogin ? "login" : "register");
  $: {
    formResponse.errorMessages = [];
    isLogin;
  }
  const form = { username: "", password: "" };
  let formResponse: APICall<User> = {
    isSuccess: false,
    errorMessages: [],
    statusCode: 0,
  };
  let isSubmitting = false;

  async function onSubmit() {
    isSubmitting = true;
    formResponse = await fetch(formAction, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    if (!formResponse.isSuccess) {
      isSubmitting = false;
      return;
    }
    if (!formResponse.data) {
      isSubmitting = false;
      formResponse.isSuccess = false;
      return goto("/prijava");
    }
    setTimeout(() => isLogin && goto("/"), 3000);
    user.signIn(formResponse.data);
  }
</script>

{#key isLogin}
  <main class="m-auto w-full max-w-lg animate-reset p-3 opacity-0">
    <div class="mb-4 text-lg font-bold">
      {isLogin ? "PRIJAVA" : "REGISTRACIJA"} KORISNIKA
    </div>
    <form
      method="post"
      spellcheck="false"
      autocomplete="true"
      on:submit|preventDefault={onSubmit}
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
          on:invalid={validate}
          on:input={validate}
          bind:value={form.username}
          required
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
          on:invalid={validate}
          on:input={validate}
          bind:value={form.password}
          required
        />
      </div>
      <button
        type="submit"
        class="mb-2 w-full rounded-md border-4 border-transparent bg-neutral-700 px-4 py-2 text-white transition-all duration-150 hover:bg-neutral-600 {isSubmitting
          ? '!border-neutral-300 !bg-white text-black'
          : ''}"
        disabled={isSubmitting}
      >
        {isLogin ? "Prijavi" : "Registriraj"} se
      </button>
      {#if formResponse.isSuccess}
        <div class="text-red-500">
          Uspješna prijava :) Na početnu stranicu za 3,2,1...
        </div>
      {/if}
      {#if formResponse.errorMessages.length}
        <div class="text-red-500">
          {@html formResponse.errorMessages.join("<br />")}
        </div>
      {/if}
      {#if isLogin}
        <div class="pt-3">
          Nemaš račun?
          <a href="/registracija" class="font-bold text-blue-500"
            >Registriraj se</a
          >
        </div>
      {/if}
    </form>
  </main>
{/key}
