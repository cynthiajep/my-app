import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'

import Newcollections from '../Components/Newcollections/Newcollections'
import Newsletter from '../Components/Newsletter/Newsletter'


const Shop = () => {
  return (
    <div>
     <Hero/>
     <Popular/>
    
     <Newcollections/>
     <Newsletter/>
    </div>
  )
}

export default Shop
