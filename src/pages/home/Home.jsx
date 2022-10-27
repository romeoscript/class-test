import React, { useState } from "react";
import CurrencySelector from "../../components/currency/CurrencySelector";
import HowToBuy from "../../components/howTo/HowToBuy";
import Navbar from "../../components/navbar/Navbar";
import ProfitTable from "../../components/table/ProfitTable";
import Wrapper from "../../components/wrapper/Wrapper";
import WrapperText from "../../components/wrapper/WrapperText";
import ExchangeFlex from "../../components/exchangeFlex/ExchangeFlex";
import "./home.scss";
import ExchangeFlex2 from "../../components/exchangeFlex/ExchangeFlex2";
import LossTable from "../../components/table/LossTable";

const Home = () => {
  const [buySell, setBuySell] = useState(false);

  const handleBuy = () => {
    setBuySell(false);
  };
  const handleSell = () => {
    setBuySell(true);
  };
  return (
    <div>
      <Wrapper>
        <Navbar />
        <div className="wrapper__container-text">
          <WrapperText />
        </div>
      </Wrapper>

      <section className="table__container">
        {/* containerfor the table */}
        <div className="table__container-div">
          <div className={buySell?'buysellbtn sellbtn':'buysellbtn buybtn'}>
            <button onClick={handleBuy} className='buy_btn'>Buy</button>
            <button onClick={handleSell} className="sell_btn">Sell</button>
          </div>
          <CurrencySelector buySell={buySell} />
          {buySell ?<LossTable />  : <ProfitTable />}
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

export default Home;
