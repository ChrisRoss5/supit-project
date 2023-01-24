import { Suspense, lazy, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LazyContact = lazy(() => import("./components/Contact"));

const App = ({ notFound }: { notFound?: boolean }) => {
  const isContactOpen = useAppSelector((state) => state.isContactOpen);
  const [isContactLoaded, setIsContactLoaded] = useState(false);

  return (
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
      <Suspense>
        {(isContactLoaded || isContactOpen) && (
          <LazyContact
            isContactLoaded={isContactLoaded}
            handleLoad={() => setIsContactLoaded(true)}
          />
        )}
      </Suspense>
    </>
  );
};

export default App;
