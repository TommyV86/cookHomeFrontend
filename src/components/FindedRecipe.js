import { Link } from "react-router-dom"
import cookAxios from "../cookHomeAxios"


export const FindedRecipe = () => {
    
    const recipeStored = JSON.parse(localStorage.getItem('allRecipesValues'))
    // let recipeIdStored = JSON.parse(localStorage.getItem('idFavRecipes'))

    let id = window.location.search.split("=")[1]

    let displayRecipe = recipeStored.map(recipe=>{
        return(
            <div key={recipe._id}> 
                <>{recipe._id === id ? <><h3>Recette :</h3><p>{recipe.name}</p><h3>Description :</h3><p>{recipe.description}</p></>: ""}</>
            </div>
        )
    })

    // const arrId = [id]
    // const idStored = recipeIdStored.map(i=>i._id == arrId)
    // console.log("id url  " + arrId);
    // console.log("id local storage " + idStored);

    // const addFavRecipe = () => {
    //     // conditionner de manière à ce que ça set un tableau si y'a rien
    //     // sinon créer un objet
    //     if(recipeIdStored == null) recipeIdStored = []
    //         else if(idStored !== arrId){
    //         const arrId = {_id: id}
    //         localStorage.setItem('entryId', JSON.stringify(arrId))
    //         recipeIdStored.push(arrId)
    //         localStorage.setItem('idFavRecipes', JSON.stringify(recipeIdStored))

    //         alert('La recette a été ajouté aux favoris ')
    //     }
    // }  

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
            <Link to='/FindRecipe'><button type="button" className="btn">Liste de recettes</button></Link>
            <button type="button" className="btn" onClick={()=>handleDelete(id)}>Supprimer la recette</button>
            
            {/* <button type="button" className="btn" onClick={addFavRecipe}>Ajouter en favoris</button> */}
            
        </div>
    )
}