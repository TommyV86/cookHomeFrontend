import { useState } from "react"

export const Home = ({user}) => {
    
    const recipe = JSON.parse(localStorage.getItem('recipeValuesHome'))
    const [ showRecipe, setShowRecipe ] = useState(false)

    const handleChange = () => {
        setShowRecipe(true)
    }

    const handleClose = () => {
        setShowRecipe(false)
    }

    const listRecipe = recipe ?
    <div><br/>
        <div className="container">
            <p>{recipe.name}</p>
            <h3>Description :</h3>
            <p>{recipe.description}</p>
            <button type="button" className="btn" onClick={handleClose}>
                Fermer
            </button>
        </div>  
    </div> : ""

    const isBtn = recipe == null ?  <h2>pas de nouvelle recette</h2> : 
    <button type="button" className="btn" onClick={handleChange}>
        {recipe.name}
    </button>

    return (
        <div> 
            <br/><br/>
            <h2>Bienvenue {user.name} ! :D <br/>Vous y trouverez les meilleures recettes ici !</h2><br/>
            <h4>Dernière recette : </h4>
            {showRecipe ? listRecipe : isBtn}   
        </div>
    )
}