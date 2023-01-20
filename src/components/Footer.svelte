<script>
  export let currentRoute;
</script>

{#if currentRoute.name != "/"}
  <footer
    class="black-text-shadow mt-auto flex h-[35vh] items-center justify-center px-5 text-center text-4xl font-bold text-white"
  >
    <div>
      BUDI IZVRSTAN U ONOM ŠTO VOLIŠ
      <div class="text-red-500">ZAISKRI</div>
    </div>
  </footer>
{/if}
