<template>
  <footer
    v-show="$route.name != 'pocetna'"
    class="mt-auto flex items-center justify-center px-5 text-center text-4xl font-bold text-white"
  >
    <div>
      BUDI IZVRSTAN U ONOM ŠTO VOLIŠ
      <div class="text-red-500">ZAISKRI</div>
    </div>
  </footer>
</template>

<style>
footer {
  height: 35vh;
  background: url("@/assets/img/zaiskri-bg.jpg") center / cover no-repeat;
  text-shadow: var(--black-text-shadow);
}
</style>
