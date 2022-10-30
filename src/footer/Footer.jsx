import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import {
  BsTelegram,
  BsWhatsapp,
  BsFillEnvelopeFill,
  BsSearch,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__links">
        <ul>
          <Link to="/">
            <li>Trade</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/login">
            <li>Log in</li>
          </Link>
          <Link to="/register">
            <li>Sign up</li>
          </Link>
        </ul>
        <div className="footer__links-search">
          <div className="search">
            <input type="search" name="" id="" />
            <BsSearch className="search_icon" />
          </div>
          <BsTelegram className="bs__icons" />
          <BsWhatsapp className="bs__icons" />
          <BsFillEnvelopeFill className="bs__icons" />
        </div>
      </div>
      <p>© Nanocodes 2022. All Rights Reserved.</p>
    </section>
  );
};

export default Footer;
