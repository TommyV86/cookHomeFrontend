// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const FavoritesRecipes = ({ recipes }) => {
    // peut etre faire une requête axios 
    // stocker les recettes dans un nouveau array pour ensuite y ajouter les favoris    

    // recupérer en props les recettes et l id de la recette du local st
    
    const idLocalStorage = JSON.parse(localStorage.getItem('idFavRecipes'))
    if(idLocalStorage !== null){
            const displayFav = recipes.map((recipe)=>{
            return <div key={recipe._id}>{recipe._id === idLocalStorage[0]._id ? <><p>{recipe.name}</p><p>{recipe.description}</p></>: ""}</div>
        })
        return (
            <div>
                <h2>resérvé aux users connecté</h2>
                <h2>FavoritesRecipes</h2><br/>
                {displayFav}
                <Link to='/'><button type="button" className="btn">Home</button></Link>
            </div>
        )
    } else {
        return (
            <div>
                <h2>resérvé aux users connecté</h2>
                <h2>FavoritesRecipes</h2><br/>
                <h2>pas de favoris</h2>
                <Link to='/'><button type="button" className="btn">Home</button></Link>
            </div>
        )
    }

    
    // utiliser use state et mettre en parametre le tableau du local storage des favoris
    // sans écraser les valeurs précédentes 

    
}