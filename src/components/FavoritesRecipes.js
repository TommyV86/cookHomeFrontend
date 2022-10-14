// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const FavoritesRecipes = () => {
    
    const recipeFavStored = JSON.parse(localStorage.getItem('favRecipes'))

    if(recipeFavStored !== null){
        const displayFav = recipeFavStored.map((recipe)=>{
            return(
            <div key={recipe._id}> 
                <p>{recipe.name}</p>
            </div>
        )})

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
}