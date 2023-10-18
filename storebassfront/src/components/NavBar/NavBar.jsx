import React, { useRef } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../../containers/Login/loginSlice";

export const NavBar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const user = useSelector(userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({ token: "", user: {} }));
    return navigate("/");
  };
  const loginButtonLabel = user.token ? "Logout" : "Login";
  const registerButtonLabel = user.token
    ? `Hello, ${user.user.name}`
    : "Register";

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

            {user.token ? (
              <a className="logoutButton" onClick={handleLogout}>
                {loginButtonLabel}
              </a>
            ) : (
              <a className="loginAccessButton" href="/login">
                {loginButtonLabel}
              </a>
            )}
            {user.token ? (
              <a className="userAccessButton" onClick={handleLogout}>
                {registerButtonLabel}
              </a>
            ) : (
              <a className="registerAccessButton" href="/register">
                {registerButtonLabel}
              </a>
            )}
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
