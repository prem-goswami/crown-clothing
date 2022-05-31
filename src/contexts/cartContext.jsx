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



export const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((eachItem) => eachItem.id !== itemToRemove.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );

}

export const deleteItem = (cartItems,itemToDelete ) => {
    return cartItems.filter((eachItem)=>eachItem.id !== itemToDelete.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartLength: 0,
    setCarLength: () => { },
    removeItemToCart: () => { },
    deleteItemFromCart: () => { },
    cartTotal : 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal]  = useState(0)

    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product));

    const removeItemToCart = (itemToRemove) =>
        setCartItems(removeCartItem(cartItems, itemToRemove));

    const deleteItemFromCart = (itemToDelete) => 
    setCartItems(deleteItem(cartItems, itemToDelete));

    useEffect(() => {
        const newCartCount = cartItems.reduce((initialCount, cartIem) => initialCount + cartIem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(()=>{
        const newTotal = cartItems.reduce((total, eachItem)=> total + (eachItem.quantity * eachItem.price), 0)
        setCartTotal(newTotal)
    },[cartItems])

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart, deleteItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};