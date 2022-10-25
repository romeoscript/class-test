import React from "react";
import './wrapper.scss'

const WrapperText = () => {
  return (
    <div className="wrapper__text">
      <h2>
        Buy <span>and</span> Sell
      </h2>
      <h2>Foreign Currency</h2>
      <button>Trade</button> <button>Get Started</button>
    </div>
  );
};

export default WrapperText;
