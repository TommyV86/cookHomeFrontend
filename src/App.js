import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { AddRecipe } from './components/AddRecipe';
import { FindRecipe } from './components/FindRecipe';
import { FindedRecipe } from './components/FindedRecipe';
import { ModifyRecipe } from './components/ModifyRecipe';
import { FavoritesRecipes } from './components/FavoritesRecipes';
import { LastRecipe } from './components/LastRecipe';
import cookAxios from './cookHomeAxios';
import { Link } from "react-router-dom"




function App() {

  // utilisation des hooks pour distribuer les données aux composants child

  const [ recipes, setRecipes ] = useState()

  useEffect(()=> {
    cookAxios.get('/getRecipes').then((res) => {
        let recipes = res.data
        let recipesStringified = JSON.stringify(recipes)
        localStorage.setItem('allRecipesValues', recipesStringified)
        let getRecipes = JSON.parse(localStorage.getItem('allRecipesValues'))
        setRecipes(getRecipes)
      }
    )
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg fixed-top">
          <Link className="navbar-brand" to='/'><h1>Cook Home</h1></Link>
          <div className='container'>
            <Link className="navlink" to='/FindRecipe'><p>Trouver une recette</p></Link>
            <Link className="navlink" to='/AddRecipe'><p>Ajouter une recette</p></Link>
            <Link className="navlink" to='/ModifyRecipe'><p>Modifier une recette</p></Link>
            <Link className="navlink" to='/FavoritesRecipes'><p>Favoris</p></Link>
          </div>
        </nav><br/><br/><br/><br/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddRecipe' element={<AddRecipe/>}/>
          <Route path='/FindRecipe' element={<FindRecipe recipes={recipes}/>}/>
          <Route path='/FindedRecipe' element={<FindedRecipe/>}/>
          <Route path='/ModifyRecipe' element={<ModifyRecipe/>}/>
          <Route path='/FavoritesRecipes' element={<FavoritesRecipes recipes={recipes}/>}/>
          <Route path='/LastRecipe' element={<LastRecipe/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App