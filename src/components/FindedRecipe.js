import { Link } from "react-router-dom"

export const FindedRecipe = () => {
    
    const recipeStored = JSON.parse(localStorage.getItem('allRecipesValues'))
    let id = window.location.search.split("=")[1]
            
    let displayRecipe = recipeStored.map(recipe=>{
        return(
            <div> 
                <h3 key={id}>{recipe._id === id ? <div><p>{recipe.name}</p><p>{recipe.description}</p></div>: ""}</h3>
            </div>
        )
    })
    return (
        <div>
            <h2>finded recipe</h2>
            {displayRecipe}
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}