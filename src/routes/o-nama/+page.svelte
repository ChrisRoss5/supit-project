<script lang="ts">
  import AlgebraGrupa from "./sections/AlgebraGrupa.svelte";
  import KakoDoNas from "./sections/KakoDoNas.svelte";
  import Povijest from "./sections/Povijest.svelte";
  import NaseVrijednosti from "./sections/NaseVrijednosti.svelte";
  import { onMount, type ComponentType } from "svelte";
  import { getImage } from "@/utils";

  const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      target.classList[isIntersecting ? "add" : "remove"]("section-visible");
    });
  });

  onMount(() => {
    document.querySelectorAll("section").forEach((section) => {
      sectionsObserver.observe(section);
    });
  });

  const sections: {
    component: ComponentType;
    id: string;
    title: string;
    icon: string;
    toggled?: boolean;
  }[] = [
    {
      component: NaseVrijednosti,
      id: "nase-vrijednosti",
      title: "Naše vrijednosti",
      icon: "flash_on",
    },
    {
      component: Povijest,
      id: "povijest",
      title: "Povijest",
      icon: "history",
    },
    {
      component: AlgebraGrupa,
      id: "algebra-grupa",
      title: "Algebra grupa",
      icon: "group",
    },
    {
      component: KakoDoNas,
      id: "kako-do-nas",
      title: "Kako do nas",
      icon: "explore",
    },
  ];
</script>

<main>
  <div class="main-img">
    <img
      class="w-full"
      src={getImage("kampus-iz-zraka-min-1.jpg")}
      alt="campus"
    />
  </div>
  <h1 class="main-title">O nama</h1>
  {#each sections as section (section.id)}
    <section id={section.id} class="transition duration-1000">
      <h2
        class="black-text-shadow relative py-8 text-center text-3xl font-semibold text-[var(--purple)] lg:bg-transparent"
        style:background-color={section.toggled ? "var(--purple-02)" : ""}
      >
        <button
          class="absolute inset-0 lg:hidden"
          on:click={() => (section.toggled = !section.toggled)}
        />
        <span class="material-icons align-middle text-3xl">
          {section.icon}
        </span>
        {section.title}
      </h2>
      <div class="lg:contents" class:hidden={!section.toggled}>
        <svelte:component this={section.component} />
      </div>
    </section>
  {/each}
</main>
