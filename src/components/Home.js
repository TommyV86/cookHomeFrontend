import { Link } from "react-router-dom"

export const Home = () => {
    
    const recipeName = JSON.parse(localStorage.getItem('recipeValues'))

    return (
        <div>

            <Link to='/FindRecipe'><button>Trouver une recette</button></Link>
            <Link to='/AddRecipe'><button>Ajouter une recette</button></Link>
            <Link to='/ModifyRecipe'><button>Modifier une recette</button></Link>
            <Link to='/FavoritesRecipes'><button>Favoris</button></Link>

            <h2>Bienvenue à Cook Home, vous y trouverez les meilleures recettes ici !</h2>
                <h2>Dernière recette : </h2>
                    <Link to={'/LastRecipe'}><button >{recipeName.name}</button></Link>    
        </div>
    )
}