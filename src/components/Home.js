import cookAxios from '../cookHomeAxios'
import { Link } from "react-router-dom"

export const Home = () => {

    // afficher une recette
    cookAxios.get('/getRecipe').then((res) => {
        let recipe = res.data
        let recipeStringified = JSON.stringify(recipe)
        localStorage.setItem('recipeValues', recipeStringified)
        
    })

    const recipeStored = JSON.parse(localStorage.getItem('recipeValues'))
    
    return (
        <div>
            <h3>
               Dernière recette : <br/><br/>
               {recipeStored.name} <br/><br/>
               {recipeStored.description}
            </h3>

            <h2>Bienvenue à Cook Home, vous y trouverez les meilleures recettes ici !</h2>
            <Link to='/FindRecipe'><button>Trouver une recette</button></Link>
            <Link to='/AddRecipe'><button>Ajouter une recette</button></Link>
            <Link to='/ModifyRecipe'><button>Modifier une recette</button></Link>
            <Link to='/FavoritesRecipes'><button>Favoris</button></Link>
        </div>
    )
}