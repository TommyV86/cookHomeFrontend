import { Link } from "react-router-dom"

export const LastRecipe = () => {

    const recipe = JSON.parse(localStorage.getItem('recipeValues'))

    return (
        <div><br/>
            <div>
                <h2>Last recipe</h2>
                <h3>Recette :</h3>
                <p>{recipe.name}</p>
                <h3>Description :</h3>
                <p>{recipe.description}</p>
            </div>
            <Link to='/'><button type="button" className="btn">Home</button></Link>
        </div>
    )
}