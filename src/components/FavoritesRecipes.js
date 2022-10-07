import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const FavoritesRecipes = ({ recipes }) => {

    // stocker les recettes dans un nouveau array pour ensuite y ajouter les favoris
    const [ favItems, setFavItems ] = useState([])
    

    // recupérer en props les recettes et l id de la recette du local st 
    const id = localStorage.getItem('idFavRecipes')

    const displayFav = recipes.map((recipe)=>{
        return <p key={recipe._id}>{recipe._id === id ? recipe.name : ""}</p>
    })

    // utiliser use state et mettre en parametre le tableau du local storage des favoris
    // sans écraser les valeurs précédentes 

    return (
        <div>
            <h2>resérvé aux users connecté</h2>
            <h2>FavoritesRecipes</h2><br/>
            <h3>Recette :</h3>
            {displayFav}
            <Link to='/'><button type="button" className="btn">Home</button></Link>
        </div>
    )
}