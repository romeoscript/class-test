import React,{useState} from "react";
import "./navbar.scss";
const Navbar = () => {
  const [bgChange, setBgChange] = useState(false)

  const changeBg =()=>{
    window.scrollY >= 80 ? setBgChange(true) : setBgChange(false);
  }
  window.addEventListener('scroll', changeBg)
  return (
    <div className='navbar__container active' >
      <div className={bgChange?'navlinks__container active':'navlinks__container'}>
        <p>Trade</p>
        <p>About us</p>
        <p>Log in</p>
        <p>Sign up</p>
      </div>
    </div>
  );
};

export default Navbar;
