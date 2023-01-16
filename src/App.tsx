import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = ({ notFound }: { notFound?: boolean }) => (
  <>
    <Header />
    {notFound ? (
      <h1 className="grid flex-1 place-items-center text-xl">
        404 — Stranica ne postoji
      </h1>
    ) : (
      <Outlet />
    )}
    <Footer />
    <Contact />
  </>
);

export default App;
