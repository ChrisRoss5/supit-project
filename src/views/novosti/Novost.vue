<template>
  <main>
    <div class="main-img !items-start justify-center">
      <img class="w-full" :src="$image(`novost${newsId}.jpg`)" alt="novost" />
      <div
        v-if="content.title1"
        class="absolute top-1/2 -translate-y-1/2 px-3 text-[clamp(1rem,5vw,3rem)] font-bold text-white lg:w-1/2 lg:px-0"
      >
        {{ content.title1 }}
      </div>
    </div>
    <h1 class="main-title">{{ content.title2 }}</h1>
    <div class="m-auto max-w-screen-xl px-3 pt-6 pb-14 text-xl md:w-3/5 opacity-0 animate-reset">
      {{ content.text }}
      <div
        v-if="newsId == 1"
        class="m-auto grid grid-cols-2 gap-6 pt-14 xl:w-3/5"
      >
        <button
          v-for="i in 2"
          class="group overflow-hidden rounded-md opacity-75 transition hover:opacity-100 hover:shadow-[0_0_6px_3px_#686868]"
          @click="openCarousel(i)"
        >
          <img
            :src="$image(`galerija${i}.jpg`)"
            alt="galerija"
            class="transition group-hover:scale-125"
          />
        </button>
        <video class="col-span-2" controls>
          <source src="@/assets/video/worldskills.mp4" type="video/mp4" />
        </video>
        <Popup :show="showCarousel" @close="showCarousel = false" darkBg>
          <DialogPanel>
            <div class="flex">
              <Transition :name="transitionTo">
                <img
                  :src="$image(`galerija${currentImgId}.jpg`)"
                  alt="galerija"
                  class="w-screen transition duration-1000"
                  :key="currentImgId"
                />
              </Transition>
            </div>
            <button
              @click="
                currentImgId--;
                transitionTo = 'left';
              "
              class="absolute top-1/2 left-0 flex h-20 w-14 -translate-y-1/2 items-center justify-center bg-black opacity-50 transition hover:opacity-100"
            >
              <span class="material-icons text-white"> arrow_back_ios </span>
            </button>
            <button
              @click="
                currentImgId++;
                transitionTo = 'right';
              "
              class="absolute top-1/2 right-0 flex h-20 w-14 -translate-y-1/2 items-center justify-center bg-black opacity-50 transition hover:opacity-100"
            >
              <span class="material-icons text-white"> arrow_forward_ios </span>
            </button>
            <button
              class="absolute top-5 right-5 z-10 opacity-50 transition hover:opacity-100"
              @click="showCarousel = false"
            >
              <span class="material-icons text-5xl text-white"> close </span>
            </button>
          </DialogPanel>
        </Popup>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { DialogPanel } from "@headlessui/vue";
import Popup from "@/components/headlessui/Popup.vue";

const news = [
  {
    title1:
      "Student Josip Stanešić 12. je sistemaš svijeta i dobitnik medalje izvrsnosti.",
    title2: "WorldSkills natjecanje - Kazan 2019.",
    text: "Nakon godinu dana priprema za natjecanje WorldSkills Kazan 2019 na kojem je sudjelovalo 1300 natjecatelja iz cijelog svijeta, trud se itekako isplatio. Josip, student 3. godine preddiplomskog studija sistemskog inženjerstva osvojio je 12. mjesto u vještini IT Networks and System Administration te osvojio medalju izvrsnosti! Čestitke Josipu ali i njegovim/našim mentorima koji su ga pripremali za ovo natjecanje – voditelju studija sistemskog inženjerstva Silviju Papiću, voditelju katedre za operacijske sustave – Vedranu Dakiću i asistentu na studiju sistemskog inženjerstva – Jasminu Redžepagiću. Čestitke i našem studentu 3.godine preddiplomskog studija programskog inženjerstva Josipu Horvatu i mentoru voditelju katedre za programsko inženjerstvo - Goranu Đambiću na osvojenom 16.mjestu u vještini IT Software Solutions for Business.",
  },
  {
    title1:
      "Nagrađujemo izvrsnost: Objavljujemo dobitnike stipendijskog natječaja šk.god. 2018./2019.!",
    title2: "Stipendijski natječaj šk.god. 2018./2019.",
    text: "Nakon velikog broja prijava koje smo primili, detaljnom analizom i provjerom utvrdili smo dobitnike ovogodišnjeg stipendijskog natječaja za maturante! Stipendiju u vrijednosti od 10.000,00 kuna na potrošačkoj kartici dobivaju: Heidi Sokolovski iz Zagreba - za najbolji rezultat iz Matematike na A razini osvojila je stipendiju u iznosu od 10.000,00 kn. Tereza Žugaj iz Zagreba - za najbolji rezultat iz Matematike na B razini osvojila je stipendiju u iznosu od 10.000,00 kn. Dalija Romac iz Sinja - za najbolji rezultat iz Hrvatskog jezika na A razini te dodatna 204 boda za rezultat iz Matematike A i Engleskog jezika A osvojila je stipendiju u iznosu od 10.000,00 kn. Ella Milinović iz Zagreba - za najbolji rezultat iz Hrvatskog jezika na B razini osvojila je stipendiju u iznosu od 10.000,00 kn. Borna Skračić iz Zadra – za najbolji rezultat iz Engleskog jezika na A razini osvojio je stipendiju u iznosu od 10.000,00 kn. Lukas Božić iz Umaga - za najbolji rezultat iz Engleskog jezika na B razini osvojio je stipendiju u iznosu od 10.000,00 kn.",
  },
  {
    title1: "",
    title2: "Digitalno Junior ljeto",
    text: "Algebra Junior organizira edukativne i zabavne ljetne praznike za sve osnovnoškolce! I ove smo godine pripremili digitalne radionice za djecu čiji je fokus rješavanja raznih problema korištenjem tehnologije, multimedije, digitalnog dizajna i komunikacija te stvaranju sadržaja u svim multimedijskim i softverskim oblicima. Radionice se održavaju u sklopu Digitalnog ljetnog kampa u Crikvenici i Digitalne ljetne škole u Zagrebu kako bismo se družili, zabavljali i učili i na moru i na kontinentu! Na digitalnom kampu i u školi provodit će se dva različita programa koji su namijenjena djeci od 1. do 8. razreda. Ovisno o odabranom terminu, polaznici će prolaziti kroz 1. ili 2. program, a u slučaju pohađanja dvotjednih programa – oba. U prvom programu nađe nindže uče biti glazbeni menadžeri dok su u drugom novinari i kreatori informacija masovnih medija. Provjerite termine, cijene i lokacije škole i kampa na sljedećem linku.",
  },
];

const route = useRoute();
const newsId = computed(() => parseInt(route.params.id as string));
const content = ref(news[newsId.value - 1]);

const showCarousel = ref(false);
const minImgId = 1;
const maxImgId = 2;
const currentImgId = ref(1);
const transitionTo = ref<"left" | "right">("right");
watch(currentImgId, (newId) => {
  if (newId > maxImgId) currentImgId.value = minImgId;
  if (newId < minImgId) currentImgId.value = maxImgId;
});
function openCarousel(id: number) {
  showCarousel.value = true;
  currentImgId.value = id;
}
</script>

<style>
.left-enter-active,
.right-enter-active {
  position: absolute;
}
.left-enter-from,
.right-leave-to {
  transform: translateX(-100%);
}
.left-leave-to,
.right-enter-from {
  transform: translateX(100%);
}
</style>
