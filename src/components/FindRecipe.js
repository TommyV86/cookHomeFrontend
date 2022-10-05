import cookAxios from '../cookHomeAxios'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

export const FindRecipe = () => {

    const [ list, setList ] = useState([])

    // 1- récup des recettes
    useEffect( ()=> {
        cookAxios.get('/getRecipes').then((res) => {
                let recipes = res.data
                let recipesStringified = JSON.stringify(recipes)
                localStorage.setItem('allRecipesValues', recipesStringified)
                let getRecipes = JSON.parse(localStorage.getItem('allRecipesValues'))
                setList(getRecipes)
            }
        )
    }, [])
 
    // 2- boucler sur les noms des recettes dans une liste
    let recipes = list.map(recipe => {
        return <Link to= {'/FindedRecipe?=' + recipe._id} key={recipe._id}><p>{recipe.name}</p></Link>
    })

    // 3- tous les noms bouclés doivent afficher la recette selectionnée
    // grâce à son id dans le compo findedrecipe ou créer un autre composant

    return (
        <div>
            <h2>Liste des recettes</h2>
            {recipes}
            <Link to='/'><button type="button" className="btn btn-primary">Home</button></Link>
        </div>
    )
}