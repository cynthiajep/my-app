import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getOriginalCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const getTotalCartAmount = (Itemscart) => {
  let totalAmount = 0;
  for (const item in Itemscart) {
    if (Itemscart[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      totalAmount += itemInfo.new_price * Itemscart[item];
    }
  }
  return totalAmount;
}

const getTotalCartItems = (Itemscart) => {
  let totalItem = 0;
  for (const item in Itemscart) {
    if (Itemscart[item] > 0) {
      totalItem += Itemscart[item];
    }
  }
  return totalItem;
}

const ShopContextProvider = (props) => {
  const [Itemscart, setItemsCart] = useState(getOriginalCart());

  const addCart = (itemId) => {
    setItemsCart((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeCart = (itemId) => {
    setItemsCart((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const ContextValue = {
    getTotalCartItems: () => getTotalCartItems(Itemscart),
    getTotalCartAmount: () => getTotalCartAmount(Itemscart),
    all_product,
    Itemscart,
    addCart,
    removeCart,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
