import React from 'react'
import './CSS/LoginSignup.css'



const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Existing account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing I agree to terms and conditions</p>
        </div>

      </div>
      
    </div>
  )
}

export default LoginSignup