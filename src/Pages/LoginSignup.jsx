// import React from 'react'
// import './CSS/LoginSignup.css'



// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Register</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Name'/>
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password'/>
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">Existing account? <span>Login</span></p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id=''/>
//           <p>By continuing I agree to terms and conditions</p>
//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default LoginSignup


import React, { useEffect } from 'react';
import { AuthClient } from "@dfinity/auth-client";

const LoginSignup = () => {
  useEffect(() => {
    const initAuthClient = async () => {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        // User is already authenticated, you can redirect them to your app or handle it as needed
        console.log("User is authenticated");
      }
    };

    initAuthClient();
  }, []);

  const handleLogin = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      // Replace 'YOUR_INTERNET_IDENTITY_CANISTER_ID' with your actual Internet Identity Canister ID
      identityProvider: `http://dzh22-nuaaa-aaaaa-qaaoa-cai.localhost:4943/#authorize`,
      onSuccess: () => {
        // Handle successful authentication, e.g., redirect to a dashboard or fetch user data
        console.log("Authentication successful");
      },
    });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login with Internet Identity</h1>
        <button onClick={handleLogin}>Login with Internet Identity</button>
      </div>
    </div>
  );
};

export default LoginSignup;
