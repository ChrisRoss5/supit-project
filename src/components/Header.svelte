<script lang="ts">
  import HeaderLinks from "./HeaderLinks.svelte";
  import { Navigate } from "svelte-router-spa";
  import { isSignedIn, user } from "@/stores";
  import { cubicInOut } from "svelte/easing";

  export let currentRoute;

  let isNavbarExpanded = false;
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

  function transitionNavMobile(node, { duration }) {
    const { opacity, maxHeight, paddingTop } = getComputedStyle(node);
    return {
      duration,
      css: (t) => `
        opacity: ${t * parseFloat(opacity)};
        max-height: ${t * parseFloat(maxHeight)}px;
        padding-top: ${t * parseFloat(paddingTop)}px;`,
      easing: cubicInOut,
    };
  }

  function transitionNavHashes(node, { duration }) {
    // todo
    const { opacity, transform } = getComputedStyle(node);
    return {
      duration,
      css: (t) => `
        opacity: ${t * parseFloat(opacity)};
        transform: translateX(${t * parseFloat(transform)}px);`,
      easing: cubicInOut,
    };
  }
</script>

<header class="sticky top-0 z-40 overflow-hidden bg-neutral-800">
  <nav
    class="flex flex-col flex-wrap whitespace-nowrap py-2 px-5 text-neutral-400 lg:flex-row lg:gap-4 lg:py-5 lg:px-10"
  >
    <div class="flex place-content-between place-items-center">
      <button
        class="lg:hidden"
        on:click={() => (isNavbarExpanded = !isNavbarExpanded)}
      >
        <span class="material-icons align-middle text-4xl">
          {isNavbarExpanded ? "close" : "menu"}
        </span>
      </button>
      {#if $isSignedIn}
        <button class="nav-btn" on:click={user.signOut}>
          <span class="material-icons rotate-180 pl-2"> logout </span>
          <span>Odjavi</span>
          <span class="pl-2 text-cyan-400">{$user.username}</span>
        </button>
      {:else}
        <Navigate to="prijava">
          <div class="nav-btn">
            <span>Prijavi se</span>
            <span class="material-icons pl-2 text-cyan-400"> login </span>
          </div>
        </Navigate>
      {/if}
    </div>
    {#if isNavbarExpanded}
      <div
        transition:transitionNavMobile={{ duration: 500 }}
        class="max-h-52 pt-2  lg:hidden"
      >
        <HeaderLinks
          isMobileView
          handleClose={() => (isNavbarExpanded = false)}
        />
      </div>
    {/if}
    <div class="hidden lg:flex">
      <HeaderLinks />
    </div>
    {#if currentRoute.name == "o-nama"}
      <div
        transition:transitionNavHashes={{ duration: 500 }}
        class="ml-auto hidden gap-3 lg:my-0 lg:flex lg:gap-0"
      >
        {#each hashes as { hash, label }}
          <Navigate
            to={hash}
            styles="nav-btn hash-btn {location.hash == hash
              ? 'text-white'
              : ''}"
          >
            <button class="contents" on:click={() => scrollToHash(hash)}>
              <span>{label}</span>
            </button>
          </Navigate>
        {/each}
      </div>
    {/if}
  </nav>
</header>
