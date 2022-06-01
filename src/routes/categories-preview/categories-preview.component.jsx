import { CategoriesContext } from "../../contexts/categories.context"
import { useContext, Fragment } from "react"
import CategoryPreview from "../../components/category-preview/category-preview"


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <>
            {Object.keys(categoriesMap).map((key) => {
                const products = categoriesMap[key]
                return (
                    <CategoryPreview key={key} title={key} products={products} />
                )
            })}
        </>
    )
}


export default CategoriesPreview