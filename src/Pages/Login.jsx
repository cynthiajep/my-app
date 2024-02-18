import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <div className='loginsignup'> 
      <div className="loginsignup-container">
        <h1>Seller Login</h1>
        <div className="loginsignup-fields">
          {/* <input type="text" placeholder='Name'/> */}
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>
            {/* <Link to="/homepage">Login</Link> */}
            <Link to="/hometest">Login</Link>
        </button>
        
        <p className="loginsignup-login">
            New account? <Link to="/supplier">Register</Link>
        </p>

        {/* <p className="loginsignup-login">New account? <span>Register</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing I agree to terms and conditions</p>
        </div> */}

      </div>
      
    </div>
  )
}

export default Login