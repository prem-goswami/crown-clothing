import Button from '../button/button.component'
import CartItem from '../cartItem/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import './cart-dropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((eachItem) => (
                    <CartItem cartItem={eachItem} key={eachItem.id} />
                ))}
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown