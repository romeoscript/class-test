import React from "react";
import "./exchange.scss";
import { artbook } from "../../assets";

const ExchangeFlex2 = () => {
  return (
    <div className="exchange_flex how__buy">
      <div className="exchange_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, quis
          massa non aenean morbi amet ultricies imperdiet.
        </p>{" "}
        <br />
        <p>
          Faucibus metus tempor justo, at vitae ut. Montes, consequat aliquet
          vel in vulputate arcu eu. Lectus aenean in amet, nulla mi, euismod
          suspendisse fermentum vitae.
        </p>
        <p>
          Aliquam orci nisi morbi egestas lectus nunc lacus placerat eget. In
          aliquam sem egestas nec habitant odio.
        </p>
      </div>
      <img src={artbook} alt="" />
    </div>
  );
};

export default ExchangeFlex2;
