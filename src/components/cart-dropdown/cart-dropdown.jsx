import Button from '../button/button.component'
import CartItem from '../cartItem/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import { Link } from 'react-router-dom'
import {CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <CartDropDownContainer >
            <CartItems >
                {cartItems.length ? (cartItems.map((eachItem) => (
                    <CartItem cartItem={eachItem} key={eachItem.id} />
                ))) : <EmptyMessage>Your Cart is Empty</EmptyMessage>}
                
            </CartItems>
            <Link to='/checkout'>
            <Button>Checkout</Button>
            </Link>
        </CartDropDownContainer>
    )
}

export default CartDropdown