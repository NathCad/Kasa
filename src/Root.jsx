import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "./assets/Logo";
import "./root.scss";

const Root = () => {
  const location = useLocation();
  const isActive = (pathname) =>
    location.pathname === pathname ? "active" : "";

  return (
    <>
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link className={isActive("/")} to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className={isActive("/aPropos")} to="/aPropos">
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Logo />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};
export default Root;
