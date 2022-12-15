import React, { useState } from "react";
import { avatar } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "../../assets/dashboardcss/profileauth.scss";

const ProfileSidebar = () => {
  const [sideToggle, setSideToggle] = useState(0);
  const toggleside = () => {
    setSideToggle(!sideToggle);
  };
  return (
    <>
      {!sideToggle && (
        <GiHamburgerMenu className="hamburger" onClick={toggleside} />
      )}
      {sideToggle && <GrClose className="hamburger" onClick={toggleside} />}

      <aside className={sideToggle ? "profile__dash" : "profile__dash active"}>
        <div className="profile__section">
          <img src={avatar} alt="" className="profile__avatar" />
          <h2>Chinonso</h2>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Transaction History</li>
          <li>Withdrawals</li>
          <li>Deposit</li>
          <li>Settings</li>
        </ul>
      </aside>
    </>
  );
};

export default ProfileSidebar;
