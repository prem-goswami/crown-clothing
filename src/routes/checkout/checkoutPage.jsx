import { CartContext } from "../../contexts/cartContext"
import { useContext } from "react"
import CheckoutItems from "../../components/checkoutItems/checkoutItems.component"

import './checkoutPage.scss'

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext)
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <h2 className="header-block">Product</h2>
                <h2>Name</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Remove</h2>
            </div>
            <br/>
            {cartItems.map((eachItem)=>(
                <CheckoutItems checkoutItems = {eachItem} key = {eachItem.id}/>
            ))}
            <div className="total">
                <span>Total : {cartTotal}</span>
            </div>
        </div>
    )
}

export default Checkout