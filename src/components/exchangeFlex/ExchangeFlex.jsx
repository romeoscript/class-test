import React from "react";
import "./exchange.scss";
import { exchange } from "../../assets";

const ExchangeFlex = () => {
  return (
    <div className="exchange_flex">
      <img src={exchange} alt="" />
      <div className="exchange_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, quis
          massa non aenean morbi amet ultricies imperdiet. Faucibus metus tempor
          justo, at vitae ut. Montes, consequat aliquet vel in vulputate arcu
          eu. Lectus aenean in amet, nulla mi, euismod suspendisse fermentum
          vitae.
        </p> <br />
        <p>
          Aliquam orci nisi morbi egestas lectus nunc lacus placerat eget. In
          aliquam sem egestas nec habitant odio.
        </p>
      </div>
    </div>
  );
};

export default ExchangeFlex;
