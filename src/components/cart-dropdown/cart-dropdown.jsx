import Button from '../button/button.component'
import CartItem from '../cartItem/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import { Link } from 'react-router-dom'
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
            <Link to='/checkout'>
            <Button>Checkout</Button>
            </Link>
        </div>
    )
}

export default CartDropdown