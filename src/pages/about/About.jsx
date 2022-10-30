import React from "react";
import HowToBuy from "../../components/howTo/HowToBuy";

import Wrapper from "../../components/wrapper/Wrapper";

import ExchangeFlex from "../../components/exchangeFlex/ExchangeFlex";
import "./about.scss";
import ExchangeFlex2 from "../../components/exchangeFlex/ExchangeFlex2";
import AboutFlex1 from "../../components/AboutContainerFlex/AboutFlex1";
import AboutFlex2 from "../../components/AboutContainerFlex/AboutFlex2";

const About = () => {
  return (
    <div>
      <Wrapper>
        {/* <Navbar /> */}
        <div className="wrapper__container-text">
         <h1>About Us</h1>
        </div>
      </Wrapper>

      <section className="table__container about__container">
        {/* containerfor the table */}
        
        <div className="table__container-div about__div">
          <AboutFlex1 />
          <AboutFlex2 />
        </div>
      </section>
      <div className="empty__height"></div>
      <section className="howTo">
        <HowToBuy />
      </section>
      <section className="flexTransaction">
        <ExchangeFlex />
      </section>
      <section className="flexTransaction">
        <ExchangeFlex2 />
      </section>
    </div>
  );
};

export default About;
