import React from 'react'
import Registrations from '../../components/Login/Registrations';
import Wrapper from "../../components/wrapper/Wrapper";
import '../login/login.scss'
import './register.scss'

const Register = () => {
  return (
    <div>
    <Wrapper>
      {/* <Navbar /> */}
      <div className="auth__wrapper">
        <div className="auth__wrapper-text register__wrapper">
          <h2>Buy and Sell Foreign Currency</h2>
        </div>
        <Registrations />
      </div>
    </Wrapper>
  </div>
  )
}

export default Register
