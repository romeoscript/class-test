import React from "react";
import { release, forsale, confirm } from "../../assets";
import "./how.scss";

const HowToSell = () => {
  return (
    <div className="how__buy">
      <h2>HOW TO SELL</h2>
      {/* how to flex */}
      <section className="how__flex">
        <div className="howto_flex-item">
          <img src={forsale} alt="" />
          <div>
            <h4>Deposit USDT</h4>
            <p>
              into your account. you can deposit from another wallet or buy from
              our marketplace using these same steps
            </p>
          </div>
        </div>
        <div className="howto_flex-item">
          <img src={confirm} alt="" />
          <div>
            <h4>Search</h4>
            <p>
              your Desired Currency in the market place and make payment to
              seller
            </p>
          </div>
        </div>
        <div className="howto_flex-item">
          <img src={release} alt="" />
          <div>
            <h4>Recieve and Confirm </h4>
            <p>your intended currency in the you account provided.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToSell;
