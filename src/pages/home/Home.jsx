import React from "react";
import CurrencySelector from "../../components/currency/CurrencySelector";
import HowToBuy from "../../components/howTo/HowToBuy";
import Navbar from "../../components/navbar/Navbar";
import ProfitTable from "../../components/table/ProfitTable";
import Wrapper from "../../components/wrapper/Wrapper";
import WrapperText from "../../components/wrapper/WrapperText";
import ExchangeFlex  from '../../components/exchangeFlex/ExchangeFlex'
import "./home.scss";
import ExchangeFlex2  from '../../components/exchangeFlex/ExchangeFlex2'
import LossTable from "../../components/table/LossTable";


const Home = () => {
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
          <div className="buysellbtn">
            <button>Buy</button>
            <button>Sell</button>
          </div>
          <CurrencySelector />
          <ProfitTable />
          <LossTable />
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
