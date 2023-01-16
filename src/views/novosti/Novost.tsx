import Modal from "@/components/headlessui/Modal";
import { $image } from "@/main";
import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

const Novost = () => {
  const { id } = useParams();
  const newsId = parseInt(id as string);
  const content = news[newsId - 1];
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImgId, setCurrentImgId] = useState(1);
  const [transitionTo, setTransitionTo] = useState<"left" | "right">("right");
  const [minImgId, maxImgId] = [1, 2];
  const carouselButtons = [
    {
      className: "left-0",
      icon: "arrow_back_ios",
      handleClick: () => {
        setCurrentImgId((currentImgId) =>
          currentImgId == minImgId ? maxImgId : currentImgId - 1
        );
        setTransitionTo("left");
      },
    },
    {
      className: "right-0",
      icon: "arrow_forward_ios",
      handleClick: () => {
        setCurrentImgId((currentImgId) =>
          currentImgId == maxImgId ? minImgId : currentImgId + 1
        );
        setTransitionTo("right");
      },
    },
  ];
  const openCarousel = (id: number) => {
    setShowCarousel(true);
    setCurrentImgId(id);
  };

  return (
    <main>
      <div className="main-img !items-start justify-center">
        <img
          className="w-full"
          src={$image(`novost${newsId}.jpg`)}
          alt="novost"
        />
        {content.title1 && (
          <div
            v-if="content.title1"
            className="absolute top-1/2 -translate-y-1/2 px-3 text-[clamp(1rem,5vw,3rem)] font-bold text-white lg:w-1/2 lg:px-0"
          >
            {content.title1}
          </div>
        )}
      </div>
      <h1 className="main-title">{content.title2}</h1>
      <div className="m-auto max-w-screen-xl animate-reset px-3 pt-6 pb-14 text-xl opacity-0 md:w-3/5">
        {content.text}
        {newsId == 1 && (
          <div className="m-auto grid grid-cols-2 gap-6 pt-14 xl:w-3/5">
            {[1, 2].map((i) => (
              <button
                className="group overflow-hidden rounded-md opacity-75 transition hover:opacity-100 hover:shadow-[0_0_6px_3px_#686868]"
                onClick={() => openCarousel(i)}
                key={i}
              >
                <img
                  src={$image(`galerija${i}.jpg`)}
                  alt="galerija"
                  className="transition group-hover:scale-125"
                />
              </button>
            ))}
            <video className="col-span-2" controls>
              <source
                src={$image("worldskills.mp4", "video")}
                type="video/mp4"
              />
            </video>
            <Modal
              show={showCarousel}
              handleClose={() => setShowCarousel(false)}
              darkBg
            >
              <Dialog.Panel>
                <TransitionGroup
                  className="flex items-center justify-center"
                  childFactory={(child) =>
                    React.cloneElement(child, {
                      classNames: "w-screen " + transitionTo,
                      timeout: 1000,
                    })
                  }
                >
                  <CSSTransition
                    key={currentImgId}
                    className={"w-screen " + transitionTo}
                    timeout={1000}
                  >
                    <img
                      src={$image(`galerija${currentImgId}.jpg`)}
                      alt={`galerija${currentImgId}`}
                      key={currentImgId}
                    />
                  </CSSTransition>
                </TransitionGroup>
                <button
                  onClick={() => {
                    setCurrentImgId((currentImgId) => currentImgId - 1);
                    setTransitionTo("left");
                  }}
                  className="absolute top-1/2 left-0 flex h-20 w-14 -translate-y-1/2 items-center justify-center bg-black opacity-50 transition hover:opacity-100"
                >
                  <span className="material-icons text-white">
                    arrow_back_ios
                  </span>
                </button>
                {carouselButtons.map(({ className, icon, handleClick }) => (
                  <button
                    onClick={handleClick}
                    className={`absolute top-1/2 ${className} flex h-20 w-14 -translate-y-1/2 items-center justify-center bg-black opacity-50 transition hover:opacity-100`}
                    key={className}
                  >
                    <span className="material-icons text-white">{icon}</span>
                  </button>
                ))}

                <button
                  className="absolute top-5 right-5 z-10 opacity-50 transition hover:opacity-100"
                  onClick={() => setShowCarousel(false)}
                >
                  <span className="material-icons text-5xl text-white">
                    close
                  </span>
                </button>
              </Dialog.Panel>
            </Modal>
          </div>
        )}
      </div>
    </main>
  );
};

export default Novost;
