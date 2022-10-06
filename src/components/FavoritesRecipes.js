// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const FavoritesRecipes = ({ recipes }) => {

    // recupérer en props les recettes et l id de la recette du local st 
    const id = localStorage.getItem('idFavRecipes')
    const displayFav = recipes.map((recipe)=>{
        return <h2 key={recipe._id}>{recipe._id === id ? recipe.name : ""}</h2>
    })

    // stocker dans un new local storage les valeurs trouvées
    // sans écraser les valeurs précédentes 

    return (
        <div>
            <h2>resérvé aux users connecté</h2>
            <h2>FavoritesRecipes</h2>
            {displayFav}
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}