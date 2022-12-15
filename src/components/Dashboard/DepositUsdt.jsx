import React from "react";
import { MdFileCopy } from "react-icons/md";
import { code } from "../../assets/index";

const DepositUsdt = () => {
  return (
    <div className="depositusdt">
      <aside>
        <h2>Deposit USDT</h2>
        <p>
          Purchase the Equivalent of the USDT to need from our marketplace by
          sending the equivalent in Naira to the account provided by the seller
        </p>
      </aside>
      <aside>
        <h1>OR</h1>
      </aside>
      <aside>
        To deposit USDT, Send the equivalent of the amount to be deposited to
        the USDT wallet below:
        <span>
          <MdFileCopy /> Copy
        </span>
        <p>WKBGKJNGLSklsfsklkJKNJNknkon SJKkKnjkBNIHBn</p>
       
      </aside>
      <aside>
        <img src={code} alt="" />
      </aside>
    </div>
  );
};

export default DepositUsdt;
