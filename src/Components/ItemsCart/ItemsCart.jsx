import React, { useContext } from 'react';
import './ItemsCart.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const ItemsCart = () => {
  const { getTotalCartAmount, getTotalCartItems, all_product, Itemscart, removeCart } = useContext(ShopContext);

  return (
    <div className='itemscart'>
      <div className="itemscart-main-format">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (Itemscart[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="itemscart-format itemscart-main-format">
                <img src={e.image} className='carticon-product-icon' alt={e.name} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='carts-item-quantity'>{Itemscart[e.id]}</button>
                <p>${e.new_price * Itemscart[e.id]}</p>
                <img className='itemscart-remove-icon' src={remove_icon} onClick={() => { removeCart(e.id) }} alt='Remove' />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="items-cart-down">
        <div className="totalcart-items">
          <h1>Total Items in Cart: {getTotalCartItems()}</h1>
        </div>
        <div>
          <div className="total-cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount(Itemscart)}</p>
          </div>
          <hr />
          <div className="total-cartitems-total-item">
            <p>Pickup Fees :</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="total-cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount(Itemscart)}</h3>
          </div>
        </div>
        <button>CHECK OUT</button>
      </div>
    </div>
  );
}

export default ItemsCart;
