import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/SellerSignup.css';

const SellerSignup = () => {
  return (
    <div className='seller-registration'>
      <div className="seller-registration-container">
        <h1>SELLER REGISTRATION</h1>
        <div className="seller-registration-fields">
          <input type="text" placeholder='Company Name'/>
          <input type="text" placeholder='Contact Person Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Create Seller Account</button>
        
        
        <p className="seller-registration-login">
          Already a seller? <Link to="/slogin">Login</Link>
        </p>
        
        <div className="seller-registration-agree">
          <input type="checkbox" name='' id=''/>
          <p>By registering, I agree to the terms and conditions for sellers.</p>
        </div>
      </div>
    </div>
  );
}

export default SellerSignup;



