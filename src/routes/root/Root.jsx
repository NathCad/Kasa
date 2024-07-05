import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/Logo";
import "./root.scss";

const Root = () => {
  return (
    <>
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/aPropos">A Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Logo />
        <small>&copy; 2020 Kasa. All rights reserved</small>
      </footer>
    </>
  );
};
export default Root;
