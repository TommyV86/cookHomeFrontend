import { useState } from "react"
import { Link } from "react-router-dom"
import cookAxios from "../cookHomeAxios"


export const FindedRecipe = ({recipes}) => {
    
    const user = JSON.parse(sessionStorage.getItem('userConnected'))
    let recipesFavStored = JSON.parse(localStorage.getItem('favRecipes'))
    const recipeHome = JSON.parse(localStorage.getItem('recipeValuesHome'))
    const [ displayFavBtn, setDisplayFavBtn ] = useState(false)
    const id = window.location.search.split("=")[1]

    let displayRecipe = recipes.map(recipe=>{
        return(
            <div key={recipe._id}> 
                <>{recipe._id === id ? 
                    <>
                        <h3>Recette :</h3>
                        <p>
                            {recipe.name}
                        </p>
                        <h3>Description :</h3>
                        <div className="container">
                            <p>
                                {recipe.description}
                            </p>
                        </div>
                    </>: ""}
                </>
            </div>
        )
    })
    
    const addFavRecipe = () => {
        // conditionner de manière à ce que ça set un tableau si y'a rien
        if(recipesFavStored){
        // fonction isRecipe qui sert d'argument à la méthode find pour voir   
        // si un id d'un objet existe dans le props recipes par rapport à l'id récupéré en params
        // pour au final garder l'objet qui a le même id que l'id en params
            const isRecipe = (recipe) => {
                return recipe._id === id;
            }
            const recipeToPush = recipes.find(isRecipe)

            // vérification pour savoir si l'objet est déjà en favoris
            const recipeAlreadyStored = recipesFavStored.find(isRecipe)
            if(recipeAlreadyStored){
                alert('recette déjà en favoris !')
            } else {
                recipesFavStored.push(recipeToPush)
                localStorage.setItem('favRecipes', JSON.stringify(recipesFavStored))
                setDisplayFavBtn(true) 
            }
        } else {
            const recipeToStore = 
            JSON.stringify(recipes.filter(recipe=> recipe._id === id))
            localStorage.setItem('favRecipes', recipeToStore)
        }
    }  

    const handleDelete = (id) => {
        cookAxios.put('/deleteRecipe/' + id).then((res)=>{
            const data = res.data
            console.log('id recipe deleted : ' + data);
            if(recipeHome && recipeHome._id === id) {
                localStorage.removeItem('recipeValuesHome')
            }
            window.location.assign('/MessageDeleteRecipe')
        })        
    }

    return (
        <div>

            <h2>finded recipe</h2>
            {displayRecipe}
            
            {displayFavBtn ? <h2>recette ajoutée en favoris !</h2> : 
            <>
                <button type="button" className="btn" onClick={addFavRecipe}>
                    Ajouter en favoris
                </button>

                <button  className="btn" type='submit' onClick={()=>handleDelete(id)}>
                    Supprimer la Recette
                </button> 
            </>}

            <Link to='/FindRecipe'>
                <button type="button" className="btn">
                    Liste de recettes
                </button>
            </Link>
            
        </div>
    )
}