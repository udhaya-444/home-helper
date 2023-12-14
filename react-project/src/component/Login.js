import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div className="App">
      <form action="">
        <h3>LOGIN</h3>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
        </div>
        <br></br>
        <button type="submit">Login</button>
        <div className="register">
        <p>
        <h3>Don't have an account?{' '}
        <Link to="/signup">SignUp</Link></h3>
      </p>
        </div>
      </form>
    </div>
  );
}

export default Login;