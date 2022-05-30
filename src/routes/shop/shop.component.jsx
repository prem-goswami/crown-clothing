import { ProductsContext } from "../../contexts/products.context"
import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import './shop.component.scss'


const  Shop = () => {
    const {products} = useContext(ProductsContext)
    return(
        <div className="products-container">
            {products.map((eachItem)=>(
                <ProductCard products = {eachItem} key = {eachItem.id}/>
            ))}
        </div>
    )
}


export default Shop