import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { AddRecipe } from './components/AddRecipe';
import { FindRecipe } from './components/FindRecipe';
import { FindedRecipe } from './components/FindedRecipe';
import { FavoritesRecipes } from './components/FavoritesRecipes';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { MessageDeleteRecipe } from './components/MessageDeleteRecipe';
import cookAxios from './cookHomeAxios';
import { Link } from "react-router-dom"
import { MessageSuccessSignUp } from './components/MessageSuccessSignUp';

function App() {
  // utilisation des hooks pour distribuer les données aux composants child
  const [ recipes, setRecipes ] = useState()

  useEffect(()=> {
    cookAxios.get('getRecipes').then((res) => {
        let data = res.data
        let recipesStringified = JSON.stringify(data)
        let recipes = JSON.parse(recipesStringified)
        setRecipes(recipes)
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
            <Link className="navlink" to='/FavoritesRecipes'><p>Favoris</p></Link>
            <Link className="navlink" to='/SignIn'><p>Connexion</p></Link>
            <Link className="navlink" to='/SignUp'><p>Créer un compte</p></Link>
          </div>
        </nav><br/><br/><br/><br/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddRecipe' element={<AddRecipe/>}/>
          <Route path='/FindRecipe' element={<FindRecipe recipes={recipes}/>}/>
          <Route path='/FindedRecipe' element={<FindedRecipe recipes={recipes}/>}/>
          <Route path='/FavoritesRecipes' element={<FavoritesRecipes/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/MessageDeleteRecipe' element={<MessageDeleteRecipe/>}/>
          <Route path='/MessageSuccessSignUp' element={<MessageSuccessSignUp/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App