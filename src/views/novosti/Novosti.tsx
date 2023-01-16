import { Link } from "react-router-dom";
import { $image } from "@/main";

const content = [
  {
    date: "28.08.2019.",
    title:
      "Student Josip Stanešić 12. je sistemaš svijeta i dobitnik medalje izvrsnosti na natjecanju WorldSkills Kazan 2019.",
  },
  {
    date: "22.07.2019.",
    title:
      "Nagrađujemo izvrsnost: Objavljujemo dobitnike stipendijskog natječaja šk.god. 2018./2019.!",
  },
  {
    date: "18.04.2019.",
    title: "Digitalno Junior ljeto",
  },
];

const Novosti = () => {
  return (
    <main>
      <h1 className="main-title">Novosti</h1>
      <section className="bg-neutral-50 px-3 py-10">
        <div className="m-auto grid max-w-screen-xl scale-50 animate-reset place-content-center gap-8 px-3 opacity-0 lg:grid-cols-3 lg:gap-20">
          {content.map(({ date, title }, i) => (
            <Link
              to={`/novosti/${i + 1}`}
              className="relative flex aspect-square max-w-xs place-items-center justify-center overflow-hidden rounded-full border-[1.5rem] border-transparent px-3 text-center font-bold shadow-[0_0_6px_3px_#ccc]"
              key={title}
            >
              <div className="black-text-shadow z-10 text-white">
                <div className="text-yellow-400">{date}</div>
                {title}
              </div>
              <img
                src={$image(`novost${i + 1}.jpg`)}
                alt="logo"
                className="absolute h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Novosti;
