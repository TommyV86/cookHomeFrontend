import { Link } from "react-router-dom"

export const FindedRecipe = () => {
    
    const recipeStored = JSON.parse(localStorage.getItem('allRecipesValues'))
    let id = window.location.search.split("=")[1]

    let displayRecipe = recipeStored.map(recipe=>{
        return(
            <div key={recipe._id}> 
                <h3>{recipe._id === id ? <div><p>{recipe.name}</p><p>{recipe.description}</p></div>: ""}</h3>
            </div>
        )
    })

    const addFavRecipe = () => {
        localStorage.setItem('idFavRecipes', [id])
        alert('La recette a été ajouté aux favoris ')
    }

    return (
        <div>
            <h2>finded recipe</h2>
            {displayRecipe}
            <Link to='/'><button>Home</button></Link>
            <Link to='/FindRecipe'><button>Liste de recettes</button></Link>
            <button onClick={addFavRecipe}>Ajouter en favoris</button>
        </div>
    )
}