import React from 'react'
import './Newcollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const Newcollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        
      {new_collection.map((item,i)=>{

        return <Item key={i}id={item.id} name={item.name} img={item.image} new_price={item.new_price}/>
    })}

      </div>
    </div>
  )
}

export default Newcollections