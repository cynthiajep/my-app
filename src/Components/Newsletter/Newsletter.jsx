import React from 'react'
import './Newsletter.css'


const Newsletter= () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers to your email</h1>
        <p>Subscribe to our newsletter</p>
        <div>
            <input type="email" placeholder='Your email id'/>
            <button>Subscribe</button>
        </div>

      
    </div>
  )
}

export default Newsletter