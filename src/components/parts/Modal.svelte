<script lang="ts">
  import { cubicInOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  export let show: boolean;
  export let darkBg = false;
  export let handleClose = () => void 0;

  // todo
  /* $: if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  } */

  function transitionSlot(node, { delay, duration }) {
    const opacity = +getComputedStyle(node).opacity;
    return {
      delay,
      duration,
      css: (t) => `
        opacity: ${t * opacity};
        transform: ${`translateY(-${1.5 * (1 - t)}rem)`};
        `,
      easing: cubicInOut,
    };
  }
</script>

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
      aria-hidden="true"
      class="flex min-h-full items-center justify-center"
      on:click|self={handleClose}
    >
      <slot />
    </div>
  </div>
{/if}
