import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [bgChange, setBgChange] = useState(false);
  const [navToggle, setNavToggle] = useState(true);

  // changenavbg
  const changeBg = () => {
    window.scrollY >= 80 ? setBgChange(true) : setBgChange(false);
  };
  window.addEventListener("scroll", changeBg);

  // togglemobile
  const toggleMobile = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="navbar__container active">
      <div
        className={
          bgChange ? "navlinks__container active" : "navlinks__container"
        }
      >
        <Link to="/" >
          <p>Trade</p>
        </Link>
        <Link to="./about">
          <p>About us</p>
        </Link>
        <Link to="/login">
          <p>Log in</p>
        </Link>
        <Link to="/register">
          <p>Sign up</p>
        </Link>
      </div>

      {navToggle && <HiMenuAlt3 className="menu" onClick={toggleMobile} />}
      {!navToggle && <MdClose className="menu" onClick={toggleMobile} />}
      {!navToggle && (
        <div className="mobile__view">
          <Link to="/" onClick={()=>  setNavToggle(!navToggle)}>
            <p>Trade</p>
          </Link>
          <Link to="./about" onClick={()=>  setNavToggle(!navToggle)}>
            <p>About us</p>
          </Link>
          <Link to="/login" onClick={()=>  setNavToggle(!navToggle)}>
            <p>Log in</p>
          </Link>
          <Link to="/register" onClick={()=>  setNavToggle(!navToggle)}>
            <p>Sign up</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
