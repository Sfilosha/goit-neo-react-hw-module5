import clsx from "clsx";
import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieAdditionalCard.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function MovieAdditionalCard({ link }) {
  return (
    <>
      <div className={css.linksWrapper}>
        <NavLink className={buildLinkClass} to="cast" state={link}>
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews" state={link}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieAdditionalCard;
