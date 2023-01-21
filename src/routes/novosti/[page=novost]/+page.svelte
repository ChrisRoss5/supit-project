<script lang="ts">
  import { page } from "$app/stores";
  import Modal from "@/components/other/Modal.svelte";
  import { getImage } from "@/utils";
  import { cubicInOut } from "svelte/easing";

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

  $: newsId = parseInt($page.params.page as string);
  $: content = news[newsId - 1];

  let showCarousel = false;
  let preventTransition = false;
  let transitionTo: "left" | "right" = "right";
  let currentImgId = 1;
  const minImgId = 1;
  const maxImgId = 2;
  $: {
    if (currentImgId > maxImgId) currentImgId = minImgId;
    if (currentImgId < minImgId) currentImgId = maxImgId;
  }

  function openCarousel(id: number) {
    showCarousel = preventTransition = true;
    currentImgId = id;
  }

  function closeCarousel() {
    showCarousel = false;
    preventTransition = true;
  }

  type t1 = { duration: number; entering: boolean };
  function transitionCarousel(node: HTMLElement, { duration, entering }: t1) {
    const x = (transitionTo == "right" ? 1 : -1) * (entering ? 1 : -1);
    if (preventTransition) {
      preventTransition = false;
      return {};
    }
    return {
      duration,
      css: (t: number) => `
        transform: translateX(${(1 - t) * x * 100}%);
        position: ${entering ? "absolute" : "static"};`,
      easing: cubicInOut,
    };
  }
</script>

<main>
  <div class="main-img !items-start justify-center">
    <img class="w-full" src={getImage(`novost${newsId}.jpg`)} alt="novost" />
    {#if content.title1}
      <div
        class="absolute top-1/2 -translate-y-1/2 px-3 text-[clamp(1rem,5vw,3rem)] font-bold text-white lg:w-1/2 lg:px-0"
      >
        {content.title1}
      </div>
    {/if}
  </div>
  <h1 class="main-title">{content.title2}</h1>
  <div
    class="m-auto max-w-screen-xl animate-reset px-3 pt-6 pb-14 text-xl opacity-0 md:w-3/5"
  >
    {content.text}
    {#if newsId == 1}
      <div class="m-auto grid grid-cols-2 gap-6 pt-14 xl:w-3/5">
        {#each [1, 2] as i}
          <button
            class="group overflow-hidden rounded-md opacity-75 transition hover:opacity-100 hover:shadow-[0_0_6px_3px_#686868]"
            on:click={() => openCarousel(i)}
          >
            <img
              src={getImage(`galerija${i}.jpg`)}
              class="transition group-hover:scale-125"
              alt="galerija"
            />
          </button>
        {/each}
        <video class="col-span-2" controls>
          <source src={getImage("worldskills.mp4", "video")} type="video/mp4" />
          <track kind="captions" />
        </video>
        <Modal show={showCarousel} onClose={closeCarousel} darkBg>
          <div class="flex">
            <!-- <Transition :name="transitionTo"> -->
            {#key currentImgId}
              <img
                in:transitionCarousel={{ duration: 1000, entering: true }}
                out:transitionCarousel={{ duration: 1000, entering: false }}
                src={getImage(`galerija${currentImgId}.jpg`)}
                class="w-screen"
                alt="galerija"
              />
            {/key}
          </div>
          <button
            on:click={() => {
              currentImgId--;
              transitionTo = "left";
            }}
            class="absolute top-1/2 left-0 flex h-20 w-14 -translate-y-1/2 items-center justify-center bg-black opacity-50 transition hover:opacity-100"
          >
            <span class="material-icons text-white"> arrow_back_ios </span>
          </button>
          <button
            on:click={() => {
              currentImgId++;
              transitionTo = "right";
            }}
            class="absolute top-1/2 right-0 flex h-20 w-14 -translate-y-1/2 items-center justify-center bg-black opacity-50 transition hover:opacity-100"
          >
            <span class="material-icons text-white"> arrow_forward_ios </span>
          </button>
          <button
            class="absolute top-5 right-5 z-10 opacity-50 transition hover:opacity-100"
            on:click={closeCarousel}
          >
            <span class="material-icons text-5xl text-white"> close </span>
          </button>
        </Modal>
      </div>
    {/if}
  </div>
</main>
