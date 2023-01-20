<script lang="ts">
  import { Navigate } from "svelte-router-spa";
  import { isContactOpen } from "@/stores";

  export let isMobileView = false;
  export let handleClose = () => void 0;

  const links = [
    { href: "/", label: "Početna", icon: "home" },
    { href: "/o-nama", label: "O nama", icon: "insert_comment" },
    { href: "/novosti", label: "Novosti", icon: "info" },
    { href: "/nastavni-plan", label: "Nastavni plan", icon: "calendar_today" },
  ];
</script>

{#each links as { href, label, icon }}
  <Navigate to={href} styles="nav-btn">
    <button class="contents" on:click={handleClose}>
      <span class="material-icons pr-2" class:my-2={isMobileView}>{icon}</span>
      <span>{label}</span>
    </button>
  </Navigate>
{/each}
<button class="nav-btn w-full" on:click={() => isContactOpen.set(true)}>
  <span class="material-icons pr-2" class:my-2={isMobileView}> email </span>
  <span>Kontakt</span>
</button>
