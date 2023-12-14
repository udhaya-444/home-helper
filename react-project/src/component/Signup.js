import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
const Signup = () =>  {
  return (
    <div className="App1">
      <form action="">
        <h3>SIGNUP</h3>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="FirstName" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="LastName" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="Mobile Number" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="email" placeholder="Email address" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="password" required/>
        </div>
        <br></br>
        <button type="submit">Sign Up</button>
        <div className="register">
        <p>
        <h3>Already have an account?{' '}
        <Link to="/">Login</Link></h3>
      </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;