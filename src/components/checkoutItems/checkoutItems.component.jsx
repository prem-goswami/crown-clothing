import './checkoutItems.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'

const CheckoutItems = (props) => {
    const { checkoutItems } = props
    const { imageUrl, price, quantity, name } = checkoutItems
    const { addItemToCart, removeItemToCart, deleteItemFromCart } = useContext(CartContext)

    const addCartItem = () => addItemToCart(checkoutItems)
    const decCartItem = () => removeItemToCart(checkoutItems)
    const deleteCartItem = () => deleteItemFromCart(checkoutItems)


    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt = {name} />
            </div>
            <span className='name'>{name}</span>
            <div className='IncDecElement'>
                <span onClick={decCartItem}>&#10094;</span>
                <p className='quantity'>{quantity}</p>
                <span onClick={addCartItem}>&#10095;</span>
            </div>
            <p className='price'>${price}</p>
            <div className='remove-button' onClick={deleteCartItem}>&#10005;</div>
        </div>
    )
}

export default CheckoutItems