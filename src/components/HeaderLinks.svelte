<script lang="ts">
  import { page } from "$app/stores";
  import { isContactOpen } from "@/stores";

  export let isMobileView = false;
  export let onClose = () => true;

  const links = [
    { href: "/", label: "Početna", icon: "home" },
    { href: "/o-nama", label: "O nama", icon: "insert_comment" },
    { href: "/novosti", label: "Novosti", icon: "info" },
    { href: "/nastavni-plan", label: "Nastavni plan", icon: "calendar_today" },
  ];
</script>

{#each links as { href, label, icon }}
  <a
    {href}
    class="nav-btn"
    class:active={$page.route.id == href}
    on:click={onClose}
  >
    <span class="material-icons pr-2" class:my-2={isMobileView}>{icon}</span>
    <span>{label}</span>
  </a>
{/each}
<button class="nav-btn w-full" on:click={() => isContactOpen.set(true)}>
  <span class="material-icons pr-2" class:my-2={isMobileView}> email </span>
  <span>Kontakt</span>
</button>
