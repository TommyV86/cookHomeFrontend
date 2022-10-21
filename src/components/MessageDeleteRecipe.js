import { Link } from "react-router-dom"

export const MessageDeleteRecipe = () => {
    return (
        <>
            <h2>Recette supprimée</h2>
            <Link to="/FindRecipe">Liste des recettes</Link>
        </>      
    )
}