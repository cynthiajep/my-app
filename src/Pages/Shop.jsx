// import React from 'react'
// import Hero from '../Components/Hero/Hero'
// import Popular from '../Components/Popular/Popular'

// import Newcollections from '../Components/Newcollections/Newcollections'
// import Newsletter from '../Components/Newsletter/Newsletter'
// import { initializeContract } from './initialize'

// const Shop = async () => {
//   await initializeContract()
//   return (
//     <div>
//      <Hero/>
//      <Popular/>
    
//      <Newcollections/>
//      <Newsletter/>
//     </div>
//   )
// }

// export default Shop



import React, { useEffect } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Newcollections from '../Components/Newcollections/Newcollections';
import Newsletter from '../Components/Newsletter/Newsletter';
import { initializeContract } from './initialize';

const Shop = () => {
  useEffect(() => {
    // Call the async function inside useEffect
    const init = async () => {
      await initializeContract();
    };
    init();
  }, []); // Empty array means this effect runs once on mount

  return (
    <div>
      <Hero />
      <Popular />
      <Newcollections />
      <Newsletter />
    </div>
  );
};

export default Shop;
