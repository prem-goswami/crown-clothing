import {CategoryContainer, BackgroundImage, CategoryBody} from  './category-item.styles.jsx'

const CategoryItem = (props) => {
    const { category } = props
    const { title, imageUrl, route} = category
    return (
        <CategoryContainer to={route}>
            <BackgroundImage className='background-image' imageUrl = {imageUrl} />
            <CategoryBody >
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBody>
        </CategoryContainer>
    )
}

export default CategoryItem