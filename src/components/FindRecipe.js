import cookAxios from '../cookHomeAxios'
import { Link } from "react-router-dom"

export const FindRecipe = () => {

    // 1- récup des recettes
    cookAxios.get('/getRecipes').then((res) => {
        let allRecipes = res.data
        let recipeStringified = JSON.stringify(allRecipes)
        localStorage.setItem('allRecipesValues', recipeStringified)
    })
 
    let allRecipes = JSON.parse(localStorage.getItem('allRecipesValues'))

    // 2- boucler sur les noms des recettes dans une liste
    let recipes = allRecipes.map(recipe => {
        return <h3>{recipe.name}</h3>
    })

    // 3- tous les noms bouclés doivent menés à un composant qui affichera la recette selectionnée
    // grâce à son id envoyé à l'url du component 
    // créer un new component pour rediriger l user vers le component recipeSelected

    return (
        <div>
            <h2>Find recipe</h2>
            {recipes}
            <Link to='/'><button type="button" className="btn btn-primary">Home</button></Link>
        </div>
    )
}