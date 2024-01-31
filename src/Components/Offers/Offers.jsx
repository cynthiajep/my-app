import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Product = () => {
  return (
    <div className='offers'>
        <div className="offers-right">
            <h1>Exclusive</h1>
            <h1>for you</h1>
            <p>ONLY BEST SELLERS PRODUCTS</p>
            <button>check now</button>

        </div>
        <div className="offers-left">
            <img src={exclusive_image } alt=''/>

        </div>
      
    </div>
  )
}

export default Product