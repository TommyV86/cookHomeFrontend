// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const FavoritesRecipes = () => {
    
    const favStored = JSON.parse(localStorage.getItem('favRecipes'))

    const handleDelete = (id) => {
        // conditionner le call back de manière à garder les éléments
        // qui n'ont pas été cliqué
        const recipesToHold = favStored.filter(i=> i._id !== id)
        console.log(recipesToHold);
        localStorage.setItem('favRecipes', JSON.stringify(recipesToHold))
        window.location.reload()
    }

    if(favStored !== null){
        const displayFav = favStored.map((recipe)=>{
            return(
            <div key={recipe._id}> 
                <p>{recipe.name}</p>
                <button type="button" className="btn" onClick={()=>handleDelete(recipe._id)}>Suprrimer</button>
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