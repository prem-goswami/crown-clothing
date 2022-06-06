import { createContext, useReducer } from 'react';
import {createAction} from '../utils/reducer/reducer.utils'

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_OPEN: 'SET_CART_OPEN'
}

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

export const deleteItem = (cartItems, itemToDelete) => {
    return cartItems.filter((eachItem) => eachItem.id !== itemToDelete.id)
}

const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen : payload
            }
        default:
            throw new Error(`Unhandeled Type ${type} in UserReducer`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartLength: 0,
    cartTotal: 0
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
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0)
    // const [cartTotal, setCartTotal] = useState(0)

    const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((initialCount, cartIem) => initialCount + cartIem.quantity, 0)

        const newTotal = newCartItems.reduce((total, eachItem) => total + (eachItem.quantity * eachItem.price), 0)

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newTotal
            } )
        //     {
        //     type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {
        //         cartItems: newCartItems,
        //         cartCount: newCartCount,
        //         cartTotal: newTotal
        //     }
        // }
        )
    }
    const addItemToCart = (product) => {
        const newCartItems = (addCartItem(cartItems, product));
        updateCartItemReducer(newCartItems)
    }

    const removeItemToCart = (itemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, itemToRemove));
        updateCartItemReducer(newCartItems)
    }
    const deleteItemFromCart = (itemToDelete) => {
        const newCartItems = (deleteItem(cartItems, itemToDelete));
        updateCartItemReducer(newCartItems)
    }
    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((initialCount, cartIem) => initialCount + cartIem.quantity, 0)
    //     setCartCount(newCartCount)
    // }, [cartItems])

    // useEffect(() => {
    //     const newTotal = cartItems.reduce((total, eachItem) => total + (eachItem.quantity * eachItem.price), 0)
    //     setCartTotal(newTotal)
    // }, [cartItems])

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN,bool))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart, deleteItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};