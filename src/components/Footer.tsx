import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname == "/") return null;

  return (
    <footer className="black-text-shadow mt-auto flex h-[35vh] items-center justify-center px-5 text-center text-4xl font-bold text-white">
      <div>
        BUDI IZVRSTAN U ONOM ŠTO VOLIŠ
        <div className="text-red-500">ZAISKRI</div>
      </div>
    </footer>
  );
};

export default Footer;
