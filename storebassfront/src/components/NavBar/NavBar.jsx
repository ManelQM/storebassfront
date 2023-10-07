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
            
            <a href="/">Home</a>
            <a href="/">NewBass</a>
            <a href="/">VintageBass</a>
            <a href="/">Pickups</a>
            <a href="/">Picks</a>
            <a href="/">Pedals</a>
            <a href="/">Straps</a>

            <a className="logoAesthetics" href="/">
              STOREBASS
            </a>

            <a href="/">Amps</a>
            <a href="/">Books</a>
            <a href="/">Cases</a>
            <a href="/">Cables</a>
            <a href="/">Cabinets</a>
            <a href="/">Strings</a>

            <a className="loginAccessButton" href="/login">
              Log In
            </a>
            <a className="registerAccessButton" href="/register">
              Register
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
