import { Link } from "react-router-dom"

export const FavoritesRecipes = () => {
    return (
        <div>
            <h2>resérvé aux users connecté</h2>
            <h2>FavoritesRecipes</h2>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}