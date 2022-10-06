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
        <div>
            <h2>Liste des recettes</h2>
            {listRecipes}
            <Link to='/'><button type="button" className="btn btn-primary">Home</button></Link>
        </div>
    )
}