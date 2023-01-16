import NaseVrijednosti from "@/views/o-nama/sections/NaseVrijednosti";
import Povijest from "@/views/o-nama/sections/Povijest";
import AlgebraGrupa from "@/views/o-nama/sections/AlgebraGrupa";
import KakoDoNas from "@/views/o-nama/sections/KakoDoNas";
import { useEffect, useState } from "react";
import { $image } from "@/main";

const sectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    target.classList[isIntersecting ? "add" : "remove"]("section-visible");
  });
});

interface Section {
  Component: () => JSX.Element;
  id: string;
  title: string;
  icon: string;
  toggled?: boolean;
}

const ONama = () => {
  useEffect(() => {
    document.querySelectorAll("section").forEach((section) => {
      sectionsObserver.observe(section);
    });
  }, []);

  const [sections, setSections] = useState<Section[]>([
    {
      Component: NaseVrijednosti,
      id: "nase-vrijednosti",
      title: "Naše vrijednosti",
      icon: "flash_on",
    },
    {
      Component: Povijest,
      id: "povijest",
      title: "Povijest",
      icon: "history",
    },
    {
      Component: AlgebraGrupa,
      id: "algebra-grupa",
      title: "Algebra grupa",
      icon: "group",
    },
    {
      Component: KakoDoNas,
      id: "kako-do-nas",
      title: "Kako do nas",
      icon: "explore",
    },
  ]);

  const toggleSection = (idx: number) => {
    const newSections = [...sections];
    newSections[idx].toggled = !newSections[idx].toggled;
    setSections(newSections);
  };

  return (
    <main>
      <div className="main-img">
        <img
          className="w-full"
          src={$image("kampus-iz-zraka-min-1.jpg")}
          alt="campus"
        />
      </div>
      <h1 className="main-title">O nama</h1>
      {sections.map(({ Component, id, title, icon, toggled }, i) => (
        <section id={id} className="transition duration-1000" key={id}>
          <h2
            className="black-text-shadow relative py-8 text-center text-3xl font-semibold text-[var(--purple)] lg:bg-transparent"
            style={{ backgroundColor: toggled ? "var(--purple-02)" : "" }}
          >
            <button
              className="absolute inset-0 lg:hidden"
              onClick={() => toggleSection(i)}
            ></button>
            <span className="material-icons align-middle text-3xl">{icon}</span>
            {title}
          </h2>
          <div className={`lg:block ${!toggled ? "hidden" : ""}`}>
            <Component />
          </div>
        </section>
      ))}
    </main>
  );
};

export default ONama;
