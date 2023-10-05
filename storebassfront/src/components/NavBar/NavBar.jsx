import React, { useRef } from "react";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <>
          <nav ref={navRef}>
            <a href="/">Home  </a>
            <a href="/">Bass  </a>
            <a href="/">NewBass  </a>

            <a className="logoAesthetics" href="/">
              STOREBASS
            </a>

            <a href="/">Cables</a>
            <a href="/">Cabinets</a>
            <a href="/">Amps</a>
            <a className="loginAccessButton" href="/login">
              Log In
            </a>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </>
      </header>
    </>
  );
};
export default NavBar;
