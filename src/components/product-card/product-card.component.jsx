import './product-card.component.scss'
import Button  from '../button/button.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'

const ProductCard = (props) => {
    const { product } = props
    const { imageUrl, name, price } = product
    const {addItemToCart} = useContext(CartContext)

    const displayCartItems = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
                <Button buttonType='inverted' onClick = {displayCartItems}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard