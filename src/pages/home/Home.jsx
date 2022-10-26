import React from "react";
import CurrencySelector from "../../components/currency/CurrencySelector";
import HowToBuy from "../../components/howTo/HowToBuy";
import Navbar from "../../components/navbar/Navbar";
import ProfitTable from "../../components/table/ProfitTable";

import Wrapper from "../../components/wrapper/Wrapper";
import WrapperText from "../../components/wrapper/WrapperText";
import "./home.scss";

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
        </div>
      </section>
      <div className="empty__height"></div>
      <section className="howTo">
        <HowToBuy />
      </section>
    </div>
  );
};

export default Home;
