import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react'
import './cart-icon.scss'


const CartIcon = () => {  
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)  
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <ShoppingIcon className = 'shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon