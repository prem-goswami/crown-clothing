import CategoryItem from '../category-item/category-item.component'
import '../directory/directory.component.scss'
 
 
 
 const Directory = (props) => {
     const {categories} = props
    return (
        <div className="directory-container">
          {categories.map((eachItem)=>(
            <CategoryItem key = {eachItem.id} category = {eachItem}/>
          ))}
        </div>
      )
 }

 export default Directory