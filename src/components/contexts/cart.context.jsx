import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  reduceCartItem: () => {},
  removeCartItem: () => {}
});

export const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // helper functions 
  const addItem = (productToAdd, currentItems) => {
    for (const item of currentItems) {
      if (item.id === productToAdd.id) {
        item.quantity++;
        return [...currentItems];
      }
    }
    return [...currentItems, {quantity:1, ...productToAdd}];
  };

  const reduceItem = (productToReduce, currentItems) => {
    for (const item of currentItems) {
      if (item.id === productToReduce.id && item.quantity === 1) {
        return currentItems.filter( newItem => newItem.id !== item.id );
      }
      else if (item.id === productToReduce.id) {
        item.quantity--;
        return [...currentItems];
      }
    }
    return currentItems;  // useless fallback, should not get to this line
  };

  const removeItem = (productToRemove, currentItems) => {
    return currentItems.filter(item => item.id !== productToRemove.id);
  }


  // setter methods
  const addCartItem = (productToAdd) => {
    setCartItems(addItem(productToAdd, cartItems));
  };

  const reduceCartItem = (productToReduce) => {
    setCartItems(reduceItem(productToReduce, cartItems));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(removeItem(productToRemove, cartItems));
  };

  const value = {isOpen, setIsOpen, cartItems, addCartItem, reduceCartItem, removeCartItem};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};