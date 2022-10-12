import { Link } from "react-router-dom"

export const FindRecipe = ({ recipes }) => {
    
    let listRecipes = recipes.map(recipe => {
        return (
            <div key={recipe._id}>
                <Link to= {'/FindedRecipe?=' + recipe._id} ><p>{recipe.name}</p></Link>
            </div>
        )
    })

    return (
        <div id="top">
            <br/><br/>
            <h2>Liste des recettes</h2><br/>
            {listRecipes}
            <Link to='/'><button type="button" className="btn">Home</button></Link><br/>
            <button type="button" className="btn"><a href="#top">Retour au top</a></button>
        </div>
    )
}