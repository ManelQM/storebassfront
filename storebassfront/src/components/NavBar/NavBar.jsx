import React, { useRef } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars,FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <>
      <header>
        <>
          <nav
            ref={navRef} className='d-flex align-items-lg-center justify-content-lg-between w-100'>
            <div className="d-flex flex-xs-column align-items-xs-center" >
              <a href="/">Home</a>
              <a href="/">Bass</a>
              <a href="/">NewBass</a>
            </div>
            <div>
                <a className="logoAesthetics" href="/">STOREBASS</a>
            </div>
            <div>
                <a href="/">Cables</a>
                <a href="/">Cabinets</a>
                <a href="/">Amps</a>
                <a className="loginAccessButton" href="/login">Log In</a>
            </div>
            <button className="nav-btn nav-close-btn">
        <FaTimes/>
      </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
        </>
      </header>
    </>
  );
};
