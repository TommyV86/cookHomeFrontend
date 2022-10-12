import { useState } from "react"
import { Link } from "react-router-dom"
import cookAxios from "../cookHomeAxios"


export const FindedRecipe = () => {
    
    const recipeStored = JSON.parse(localStorage.getItem('allRecipesValues'))
    let recipeIdStored = JSON.parse(localStorage.getItem('idFavRecipes'))
    const id = window.location.search.split("=")[1]
    const arrId = {_id: id}

    let displayRecipe = recipeStored.map(recipe=>{
        return(
            <div key={recipe._id}> 
                <>{recipe._id === id ? <><h3>Recette :</h3><p>{recipe.name}</p><h3>Description :</h3><p>{recipe.description}</p></>: ""}</>
            </div>
        )
    })

    const [ displayFavBtn, setDisplayFavBtn ] = useState(false)
    const addFavRecipe = () => {
        // conditionner de manière à ce que ça set un tableau si y'a rien
        // sinon créer un objet
        if(recipeIdStored == null) recipeIdStored = []
        localStorage.setItem('entryId', JSON.stringify(arrId))
        recipeIdStored.push(arrId)
        localStorage.setItem('idFavRecipes', JSON.stringify(recipeIdStored))
        setDisplayFavBtn(true)
    }  

    const handleDelete = (id) => {
        cookAxios.put('/deleteRecipe/' + id).then((res)=>{
            const data = res.data
            console.log('id recipe deleted : ' + data);
            window.location.reload()            
        })        
    }

    return (
        <div>

            <h2>finded recipe</h2>
            {displayRecipe}
            {displayFavBtn ? <h2>recette ajoutée en favoris !</h2> : 
            <><button type="button" className="btn" onClick={addFavRecipe}>Ajouter en favoris</button>
            <button type="button" className="btn" onClick={()=>handleDelete(id)}>Supprimer la recette</button>
            </>}
            <Link to='/FindRecipe'><button type="button" className="btn">Liste de recettes</button></Link>
            
        </div>
    )
}