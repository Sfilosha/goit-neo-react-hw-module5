import React from "react";
import clsx from "clsx";
import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function NavBar() {
  return (
    <header className="container">
      <nav className={css.navBar}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/Movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
