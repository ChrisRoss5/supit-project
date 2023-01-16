import { $image } from "@/main";

const content = [
  {
    title: "EC-COUNCIL ACCREDITED TRAINING CENTER - KREDITIRANI TRENING CENTAR",
    img: "EC-Council.png",
  },
  {
    title: "CISCO NETWORKING ACADEMY, CISCO AKADEMIJA MREŽNIH TEHNOLOGIJA",
    img: "1024px-Cisco_academy.png",
  },
  {
    title: "VUE ISPITNI CENTAR ZA TESTIRANJE KANDIDATA",
    img: "VUElogo.jpg",
  },
  {
    title: "AUTODESK TRENING CENTAR ZA AUTOCAD, INVENTOR I 3D STUDIO ALATE",
    img: "autodesk.png",
  },
  {
    title: "ADOBE AUTORIZIRANI TRENING PARTNER ZA GRAFIČKE I WEB APLIKACIJE",
    img: "auth_training_cntr.gif",
  },
  {
    title: "MICROSOFT GOLD CERTIFIED PARTNER FOR LEARNING SOLUTIONS",
    img: "ms_novo.png",
  },
  {
    title: "RED HAT AKADEMIJA – PODRŽAVA NASTAVU I CERTIFIKACIJSKE ISPITE",
    img: "redhatLogo.png",
  },
  {
    title:
      "ORACLE APPROVED EDUCATION CENTER – PROVEDBA SLUŽBENE ORACLE EDUKACIJE",
    img: "oracleLogo.png",
  },
];

const AlgebraGrupa = () => {
  return (
    <div className="pt-4 pb-8">
      <div className="cursive">
        <div className="m-auto max-w-screen-xl md:w-3/5">
          Algebra grupa je vodeći hrvatski i regionalni privatni obrazovni
          sustav prisutan u 30 gradova diljem Republike Hrvatske, s više od 120
          stalno zaposlenih i više od 400 vanjskih suradnika.
          <br />
          <br />
          Kroz proteklih gotovo 20 godina rada, Algebra je postala najznačajniji
          regionalni edukacijski partner tvrtki Microsoft, Cisco, Adobe,
          Autodesk, ECDL, VMware, EC-Council i drugih. U obrazovanju odraslih
          školujemo oko 18.000 polaznika seminara i programa obrazovanja
          godišnje, dok u visokom obrazovanju upisujemo svake godine više od 300
          novih studenata. Kvalitetu poslovanja Algebre prepoznali su kako naši
          klijenti tako i svi značajniji proizvođači softvera, a dokazuje ga i
          implementirani ISO 9001:2000 certifikat koji smo uveli još 2004.
          godine.
        </div>
      </div>
      <div className="m-auto grid max-w-screen-xl gap-4 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content.map(({ title, img }) => (
          <div className="rounded-md p-4 text-justify" key={title}>
            <div className="mb-4 border-b-2 pb-4 font-semibold -tracking-widest">
              {title}
            </div>
            <img
              src={$image(img)}
              alt="certifikat"
              className="m-auto max-h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgebraGrupa;
