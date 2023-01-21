<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { isSignedIn, user } from "@/stores";
  import { backIn, backOut, cubicInOut } from "svelte/easing";
  import HeaderLinks from "./HeaderLinks.svelte";

  let isNavbarExpanded = false;
  const hashes = [
    { hash: "#nase-vrijednosti", label: "Naše vrijednosti" },
    { hash: "#povijest", label: "Povijest" },
    { hash: "#algebra-grupa", label: "Algebra grupa" },
    { hash: "#kako-do-nas", label: "Kako do nas" },
  ];

  function scrollToHash(hash: string) {
    goto(hash, { noScroll: true });
    setTimeout(() => {
      window.scrollTo({
        top:
          document.querySelector(hash)!.getBoundingClientRect().top +
          window.scrollY -
          document.querySelector("header")!.offsetHeight,
        behavior: "smooth",
      });
    }, 0);
  }

  type t1 = { duration: number };
  function transitionNavMobile(node: HTMLElement, { duration }: t1) {
    const { maxHeight, paddingTop } = getComputedStyle(node);
    return {
      duration,
      css: (t: number) => `
        opacity: ${t};
        max-height: ${t * parseFloat(maxHeight)}px;
        padding-top: ${t * parseFloat(paddingTop)}px;`,
      easing: cubicInOut,
    };
  }

  type t2 = { duration: number; timing: (t: number) => number };
  function transitionNavHashes(node: HTMLElement, { duration, timing }: t2) {
    return {
      duration,
      css: (t: number) => `
        opacity: ${t};
        transform: translateX(${(1 - timing(t)) * 100}%);`,
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
        <a
          href="/prijava"
          class="nav-btn"
          class:active={$page.params.page == "prijava"}
        >
          <span>Prijavi se</span>
          <span class="material-icons pl-2 text-cyan-400"> login </span>
        </a>
      {/if}
    </div>
    {#if isNavbarExpanded}
      <div
        transition:transitionNavMobile={{ duration: 500 }}
        class="max-h-52 pt-2 lg:hidden"
      >
        <HeaderLinks isMobileView onClose={() => (isNavbarExpanded = false)} />
      </div>
    {/if}
    <div class="hidden lg:flex">
      <HeaderLinks />
    </div>
    {#if $page.route.id == "/o-nama"}
      <div
        in:transitionNavHashes={{ duration: 500, timing: backOut }}
        out:transitionNavHashes={{ duration: 500, timing: backIn }}
        class="ml-auto hidden gap-3 lg:my-0 lg:flex lg:gap-0"
      >
        {#each hashes as { hash, label }}
          <a
            href={hash}
            class="nav-btn hash-btn"
            class:text-white={$page.url.hash == hash}
            on:click|preventDefault={() => scrollToHash(hash)}
            ><span>{label}</span>
          </a>
        {/each}
      </div>
    {/if}
  </nav>
</header>
