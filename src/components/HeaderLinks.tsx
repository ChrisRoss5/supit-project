import { NavLink } from "react-router-dom";
import { toggleContact, useAppDispatch } from "@/store";

const links = [
  { href: "/", label: "Početna", icon: "home" },
  { href: "/o-nama", label: "O nama", icon: "insert_comment" },
  { href: "/novosti", label: "Novosti", icon: "info" },
  { href: "/nastavni-plan", label: "Nastavni plan", icon: "calendar_today" },
];

type Props = { isMobileView?: boolean; handleClose?: () => void };

const HeaderLinks = ({ isMobileView, handleClose }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {links.map(({ href, label, icon }) => (
        <NavLink
          key={href}
          to={href}
          className="nav-btn"
          onClick={() => isMobileView && handleClose && handleClose()}
        >
          <span className={`material-icons pr-2 ${isMobileView ? "my-2" : ""}`}>
            {icon}
          </span>
          <span>{label}</span>
        </NavLink>
      ))}
      <button
        className="nav-btn w-full"
        onClick={() => dispatch(toggleContact(true))}
      >
        <span className={`material-icons pr-2 ${isMobileView ? "my-2" : ""}`}>
          email
        </span>
        <span>Kontakt</span>
      </button>
    </>
  );
};

export default HeaderLinks;
