import React from "react";
import "../../assets/dashboardcss/profileauth.scss";
import Wrapper from "../wrapper/Wrapper";

const ProfileAuth = () => {
  return (
    <Wrapper>
      <div className="profile__wrapper">
        <aside className="profile__dash"></aside>
        <aside className="profile__information">
          <div className="twofactor">
            <h3>2-Factor Verification</h3>
            <p>
              Purchase the Equivalent of the USDT to need from our <span>marketplace</span>
              by sending{" "}
            </p>
            <p>
              Purchase the Equivalent of the USDT to need from our <span>marketplace</span>
              by sending{" "}
            </p>
            <p>
              Purchase the Equivalent of the USDT to need from our <span>marketplace</span>
              by sending{" "}
            </p>
          </div>
          <div className="submission">
            <h3>Submissions</h3>
           <div className="input__div">
           <label htmlFor="">Do a live Video</label> <input type="text" /> 
           </div>
           <div className="input__div">  <label htmlFor="">Government issued ID card</label> <input type="text" /></div>
           
            <div className="input__div">
            <label htmlFor="">Residential address Proof</label> <input type="text" />
            </div>
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};

export default ProfileAuth;
