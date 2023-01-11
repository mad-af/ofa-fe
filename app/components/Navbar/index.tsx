import { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import styles from "./styles.css"
import logo from './assets/logo.svg';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}



export function Navbar() {
  const [menuMobile, setMenuMobile] = useState<string>("");
  const [navMobile, setNavMobile] = useState<string>("");
  const activeMenuMobile = () => {
    const active = menuMobile == "" ? "is-active" : ""
    const activea = navMobile == "" ? "mobile-nav" : ""
    setMenuMobile(active)
    setNavMobile(activea)
  }

  return (
    <div id="nav-wrapper">
      <div id="grad-bar"></div>
      <nav>
        <a href="/landing/home" id="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className={"menu-toggle " + menuMobile} id="mobile-menu" onClick={activeMenuMobile}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={navMobile} >
          <li>
            <a href="/landing/home">Home</a>
          </li>
          <li>
            <a href="/landing/about">About</a>
          </li>
          <li>
            <a href="/landing/service">Service</a>
          </li>
        </ul>
      
      </nav>
    </div>
  )
}