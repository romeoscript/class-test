import React from "react";
import "./logins.scss";
const Registrations = () => {
  return (
    <div className="logins loginss">
      <form action="#">
        <section className="name__section">
          <div>
            {" "}
            <label htmlFor="name">Surname</label> <br />
            <input type="text" />
          </div>
          <div>
            {" "}
            <label htmlFor="name">FirstName</label> <br />
            <input type="text" />
          </div>
        </section>
        <label htmlFor="email">E-mail</label> <br />
        <input type="email" />
        <section className="name__section">
          <div>
            {" "}
            <label htmlFor="name">Password</label> <br />
            <input type="password" />
          </div>
          <div>
            {" "}
            <label htmlFor="name">Confirm Password</label> <br />
            <input type="password" />
          </div>
        </section>
        <section className="choose__pin">
          <p>choose pin</p>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <input type="submit" value="Sign in" />
        <p>already have an account? login</p>
      </form>
    </div>
  );
};

export default Registrations;
