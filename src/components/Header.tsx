import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch, signOut } from "@/store";
import { CSSTransition } from "react-transition-group";
import HeaderLinks from "./HeaderLinks";

const hashes = [
  { hash: "#nase-vrijednosti", label: "Naše vrijednosti" },
  { hash: "#povijest", label: "Povijest" },
  { hash: "#algebra-grupa", label: "Algebra grupa" },
  { hash: "#kako-do-nas", label: "Kako do nas" },
];

const scrollToHash = (hash: string) => {
  window.scrollTo({
    top:
      document.querySelector(hash)!.getBoundingClientRect().top +
      window.scrollY -
      document.querySelector("header")!.offsetHeight,
    behavior: "smooth",
  });
};

const Header = () => {
  const location = useLocation();
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-40 overflow-hidden bg-neutral-800">
      <nav className="flex flex-col flex-wrap whitespace-nowrap py-2 px-5 text-neutral-400 lg:flex-row lg:gap-4 lg:py-5 lg:px-10">
        <div className="flex place-content-between place-items-center">
          <button
            className="lg:hidden"
            onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
          >
            <span className="material-icons align-middle text-4xl">
              {isNavbarExpanded ? "close" : "menu"}
            </span>
          </button>
          {state.isSignedIn ? (
            <button className="nav-btn" onClick={() => dispatch(signOut())}>
              <span className="material-icons rotate-180 pl-2">logout</span>
              <span>Odjavi</span>
              <span className="pl-2 text-cyan-400">{state.user.username}</span>
            </button>
          ) : (
            <NavLink to="/prijava" className="nav-btn">
              <span>Prijavi se</span>
              <span className="material-icons pl-2 text-cyan-400">login</span>
            </NavLink>
          )}
        </div>
        <CSSTransition
          in={isNavbarExpanded}
          timeout={500}
          unmountOnExit
          classNames="nav-mobile"
        >
          <div className="pt-2 lg:hidden">
            <HeaderLinks
              isMobileView
              handleClose={() => setIsNavbarExpanded(false)}
            />
          </div>
        </CSSTransition>
        <div className="hidden lg:flex">
          <HeaderLinks />
        </div>
        <CSSTransition
          in={location.pathname == "/o-nama"}
          timeout={500}
          classNames="nav-hash"
          unmountOnExit
        >
          <div className="ml-auto hidden gap-3 lg:my-0 lg:flex lg:gap-0">
            {hashes.map(({ hash, label }) => (
              <NavLink
                key={hash}
                to={hash}
                className={`nav-btn hash-btn ${
                  location.hash == hash ? "text-white" : ""
                }`}
                onClick={() => scrollToHash(hash)}
              >
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </CSSTransition>
      </nav>
    </header>
  );
};

export default Header;
