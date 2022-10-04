import { Link } from "react-router-dom"

export const FindedRecipe = () => {
    const recipeStored = JSON.parse(localStorage.getItem('recipeValues'))
    return (
        <div>
            <h2>finded recipe</h2>
            <h3>{recipeStored.name}</h3>
            <h2>Description</h2>
            <h3>{recipeStored.description}</h3>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}