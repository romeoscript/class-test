import React from "react";
import "./currencysel.scss";
import { Refresh, ArrowDown2 } from "iconsax-react";

const CurrencySelector = () => {
  return (
    <div className="currency__selector">
      <div>
        <label htmlFor="Currency">Currency</label>
        <br />
        <div className="custom__select">
          <select>
            <option value="usd">USD</option>
            <option value="naira">NAIRA</option>
            <option value="YEN">YEN</option>
            <option value="POUNDS">POUNDS</option>
            <option value="EURO">EURO</option>
          </select>
          <span className="custom__arrow">
            <ArrowDown2 size="20" color="#FFF" />
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="Currency">Amount</label>
        <br />
        <input type="text" placeholder="enter amount" />
      </div>
      <div>
        <label htmlFor="Currency">Payment</label>
        <br />
        <div className="custom__select">
          <select>
            <option value="bank">Bank Transfer</option>
            <option value="Ussd">USSD</option>
            <option value="Internet">Internet Banking</option>
            <option value="Card">Card</option>
          </select>
          <span className="custom__arrow">
            <ArrowDown2 size="20" color="#FFF" />
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="" style={{ visibility: "hidden" }}>
          mine
        </label>
        <div className="refresh">
          refresh <Refresh size="12" color="#3D543E" />
        </div>
      </div>
    </div>
  );
};

export default CurrencySelector;
