import React from "react";
import "./footer.scss";
import { BsTelegram, BsWhatsapp, BsFillEnvelopeFill,BsSearch } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__links">
        <ul>
          <li>Trade</li>
          <li>About us</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
        <div className="footer__links-search">
          <div className="search">
            <input type="search" name="" id="" />
            <BsSearch className="search_icon"/>
          </div>
          <BsTelegram className="bs__icons"/>
          <BsWhatsapp className="bs__icons"/>
          <BsFillEnvelopeFill className="bs__icons"/>
        </div>
      </div>
      <p>© Nanocodes 2022. All Rights Reserved.</p>
    </section>
  );
};

export default Footer;
