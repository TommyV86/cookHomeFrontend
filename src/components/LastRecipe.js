import { Link } from "react-router-dom"

export const LastRecipe = () => {

    const recipe = JSON.parse(localStorage.getItem('recipeValues'))

    return (
        <div>
            <h2>Last recipe</h2>
            <h2>{recipe.name}</h2>
            <h2>Description</h2>
            <h2>{recipe.description}</h2>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}