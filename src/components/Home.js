import cookAxios from '../cookHomeAxios'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

export const Home = () => {

    const [ recipe, setRecipe ] = useState()

    useEffect(()=> {
            cookAxios.get('/getRecipe').then((res) => {
            let recipe = res.data
            let recipeStringified = JSON.stringify(recipe)
            localStorage.setItem('recipeValues', recipeStringified)
            let getRecipe = JSON.parse(localStorage.getItem('recipeValues'))
            setRecipe(getRecipe.name)
        })
    }, [])
    
    return (
        <div>

            <Link to='/FindRecipe'><button>Trouver une recette</button></Link>
            <Link to='/AddRecipe'><button>Ajouter une recette</button></Link>
            <Link to='/ModifyRecipe'><button>Modifier une recette</button></Link>
            <Link to='/FavoritesRecipes'><button>Favoris</button></Link>

            <h2>Bienvenue à Cook Home, vous y trouverez les meilleures recettes ici !</h2>
                <h2>Dernière recette : </h2>
                    <Link to='/FindedRecipe'><h2>{recipe}</h2></Link>    
        </div>
    )
}