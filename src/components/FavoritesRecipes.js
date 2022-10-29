// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const FavoritesRecipes = ({user}) => {
    const favStored = JSON.parse(localStorage.getItem(`${user.name} favRecipes`))

    const handleDelete = (id) => {
        // conditionner le call back de manière à garder les éléments
        // qui n'ont pas été cliqué
        const recipesToHold = favStored.filter(i=> i._id !== id)
        console.log(recipesToHold);
        localStorage.setItem(`${user.name} favRecipes`, JSON.stringify(recipesToHold))
        window.location.reload()
    }

    if(favStored !== null){
        const displayFav = favStored.map((recipe)=>{
            return(
                <div key={recipe._id}> 
                    <p>
                        {recipe.name}
                        <button type="button" className="btn" onClick={()=>handleDelete(recipe._id)}>
                            x
                        </button>
                    </p>                     
                </div>
            )})

        return (
            <div>
                <h2>FavoritesRecipes</h2><br/>
                {displayFav}
                <Link to='/'>
                    <button type="button" className="btn">
                        Home
                    </button>
                </Link>
            </div>
        )
    } else {
        return (
            <div>
                <h2>FavoritesRecipes</h2><br/>
                <h2>pas de favoris</h2>
                <Link to='/'>
                    <button type="button" className="btn">
                        Home
                    </button>
                </Link>
            </div>
        )
    }    
}