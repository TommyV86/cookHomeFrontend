import { Link } from "react-router-dom"
import {  useState } from "react"

export const FindRecipe = ({ recipes }) => {
    // maper le select avec recipes de façon à afficher l option choisie
    // conditionner le selected, boucler sur l option value
    // si option value = selected alors selected = value
    const [ originValue, setOriginValue ] = useState()
    const [ isSelected, setIsSelected ] = useState(false)
    const optionDefault = <option defaultValue>Choix d'origine de la recette</option>

    const originRecipes = [
        {origin:"Africaine"},
        {origin:"Américaine"},
        {origin:"Asiatique"},
        {origin:"Européenne"},
        {origin:"Océanienne"}
    ]

    const onChange = (e) => {
        let selectedValue = e.target.value
        console.log(selectedValue)
        setOriginValue(selectedValue)
        !(selectedValue === "Choix d'origine de la recette") ? setIsSelected(true) : setIsSelected(false)
    }

    const optionSelect = originRecipes.map(recipe=> {
        return (
            <option key ={recipe.origin}>{recipe.origin}</option>
        )
    })
    
    const selectOriginRecipes = 
    <div className="container" id="container-select-form">
        <select className="form-select" id="select-form" 
        aria-label="Default select example" onChange={onChange}>
            {optionDefault}
            {optionSelect}
        </select>
    </div>   
    
    const listRecipesFiltered = 
    recipes.filter(i=> i.origin === originValue).map(recipe => {
        return (
            <div key={recipe._id}>
                <div>
                    <Link to= {'/FindedRecipe?=' + recipe._id} >
                        <p>{recipe.name}</p>
                    </Link>
                </div>
            </div>
        )
    })

    const allListRecipes = 
    recipes.map(recipe => {
        return (
            <div key={recipe._id}>
                <div>
                    <Link to= {'/FindedRecipe?=' + recipe._id}>
                        <p>{recipe.name}</p>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div id="top">
            <br/><br/>
            <h2>Listes des recettes</h2><br/>
                {selectOriginRecipes}
                {isSelected ? listRecipesFiltered : allListRecipes}
            <Link to='/'>
                <button type="button" className="btn">Home</button>
            </Link><br/>
            <a href="#top">Retour au top</a>
        </div>
    )
}