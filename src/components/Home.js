import { Link } from "react-router-dom"

export const Home = () => {
    
    const recipeName = JSON.parse(localStorage.getItem('recipeValues'))

    const display = recipeName == null ? <h2>pas de nouvelle recette</h2> : <Link to={'/LastRecipe'}><button type="button" className="btn">{recipeName.name}</button></Link>
    return (
        <div> 

            <br/><br/>
            
            <h2>Bienvenue à Cook Home, vous y trouverez les meilleures recettes ici !</h2><br/>
            <h4>Dernière recette : </h4>
            {display}   

        </div>
    )
}