import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartLength : 0,
  setCarLength : () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[cartCount, setCartCount] = useState(0)

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));



    useEffect(()=>{
        const newCartCount = cartItems.reduce((initialCount, cartIem)=>initialCount + cartIem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};