import React from 'react'
import './logins.scss'

const Logins = () => {
  return (
    <div className='logins'>
      <form action="#">
        <label htmlFor="name">Name</label> <br />
        <input type="text"  />
        <label htmlFor="password">password</label> <br />
        <input type="password"  />
        <input type="submit" value="Sign in" />
        <p>Forgot Password?</p>
      </form>
    </div>
  )
}

export default Logins
