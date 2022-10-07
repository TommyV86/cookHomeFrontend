import { Link } from "react-router-dom"

export const FindedRecipe = () => {
    
    const recipeStored = JSON.parse(localStorage.getItem('allRecipesValues'))
    let id = window.location.search.split("=")[1]

    let displayRecipe = recipeStored.map(recipe=>{
        return(
            <div key={recipe._id}> 
                <>{recipe._id === id ? <><h3>Recette :</h3><p>{recipe.name}</p><h3>Description :</h3><p>{recipe.description}</p></>: ""}</>
            </div>
        )
    })

    const addFavRecipe = () => {
        localStorage.setItem('idFavRecipes', id)
        alert('La recette a été ajouté aux favoris ')
    }

    return (
        <div>
            <h2>finded recipe</h2>
            {displayRecipe}
            <Link to='/FindRecipe'><button type="button" className="btn">Liste de recettes</button></Link>
            <button type="button" className="btn" onClick={addFavRecipe}>Ajouter en favoris</button>
        </div>
    )
}