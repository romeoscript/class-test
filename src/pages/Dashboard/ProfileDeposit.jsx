import React from "react";
import "../../assets/dashboardcss/profileauth.scss";
import "../../assets/dashboardcss/Deposit.scss";
import Wrapper from "../../components/wrapper/Wrapper";
import ProfileSidebar from "./ProfileSidebar";
import DepositUsdt from "../../components/Dashboard/DepositUsdt";
import DepositHistory from "../../components/Dashboard/DepositHistory";

const ProfileDeposit = () => {
  return (
    <Wrapper>
      <div className="profile__wrapper">
        <ProfileSidebar />
        <aside className="profile__information">
          <DepositUsdt />
          <DepositHistory />
        </aside>
      </div>
    </Wrapper>
  );
};

export default ProfileDeposit;
