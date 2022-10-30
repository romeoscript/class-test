import React from "react";
import Logins from "../../components/Login/Logins";
import Wrapper from "../../components/wrapper/Wrapper";
import './login.scss'

const Login = () => {
  return (
    <div>
      <Wrapper>
        {/* <Navbar /> */}
        <div className="auth__wrapper">
          <div className="auth__wrapper-text">
            <h2>Buy and Sell Foreign Currency</h2>
          </div>
          <Logins />
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
