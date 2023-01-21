<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  export let show: boolean;
  export let darkBg = false;
  export let onClose: () => void;

  let ref: HTMLElement, portal: HTMLElement;
  onMount(() => {
    portal = document.createElement("div");
    document.body.appendChild(portal).className = "portal";
    portal.appendChild(ref);
  });
  onDestroy(() => {
    document.body.removeChild(portal);
  });

  const { documentElement } = document;

  type t1 = { delay: number; duration: number };
  function transitionSlot(node: HTMLElement, { delay, duration }: t1) {
    if (delay) {
      const { clientWidth } = documentElement;
      documentElement.style.overflow = "hidden";
      documentElement.style.paddingRight = innerWidth - clientWidth + "px";
    } else {
      setTimeout(() => documentElement.setAttribute("style", ""), duration);
    }
    return {
      delay,
      duration,
      css: (t: number) => `
        opacity: ${t};
        transform: ${`translateY(-${1.5 * (1 - t)}rem)`};`,
      easing: cubicInOut,
    };
  }
</script>

<div hidden>
  <div bind:this={ref}>
    {#if show}
      <div
        transition:fade={{ duration: 300 }}
        class="fixed inset-0 overflow-hidden z-50 bg-black {darkBg
          ? `bg-opacity-90`
          : 'bg-opacity-50'}"
      >
        <div
          in:transitionSlot={{ delay: 150, duration: 300 }}
          out:transitionSlot={{ delay: 0, duration: 300 }}
          class="flex min-h-full items-center justify-center"
          on:click|self={onClose}
          aria-hidden="true"
        >
          <slot />
        </div>
      </div>
    {/if}
  </div>
</div>
