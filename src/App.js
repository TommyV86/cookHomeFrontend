import cookAxios from './cookHomeAxios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { NoLogin } from './components/NoLogin';
import { Home } from './components/Home';
import { AddRecipe } from './components/AddRecipe';
import { FindRecipe } from './components/FindRecipe';
import { FindedRecipe } from './components/FindedRecipe';
import { FavoritesRecipes } from './components/FavoritesRecipes';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { PasswordSendMail } from './components/PasswordSendMail';
import { PasswordChange } from './components/PasswordChange';
import { MessageDeleteRecipe } from './components/MessageDeleteRecipe';

function App() {
  // utilisation des hooks pour distribuer les données aux composants child
  const [ recipes, setRecipes ] = useState()
  const user = JSON.parse(sessionStorage.getItem('userConnected'))

  const logOut = () => {
    sessionStorage.removeItem('userConnected')
    window.location.assign('/')
  }

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
            
            {user ? <>
                      <Link className="navlink" to='/FindRecipe'><p>Trouver une recette</p></Link>
                      <Link className="navlink" to='/AddRecipe'><p>Ajouter une recette</p></Link>
                      <Link className="navlink" to='/FavoritesRecipes'><p>Favoris</p></Link>
                      <p className='user'>Welcome {user.name} !</p>
                      <button type="button" className="btn" onClick={logOut}>deco</button>
                    </> : 
                    <>
                      <Link className="navlink" to='/SignIn'><p>Connexion</p></Link>
                      <Link className="navlink" to='/SignUp'><p>Créer un compte</p></Link>
                    </>
            }
                    
          </div>
        </nav><br/><br/><br/><br/>

        <Routes>
          {user ? <Route path='/' element={<Home user={user}/>}/> : <Route path='/' element={<NoLogin/>}/>}
          <Route path='/AddRecipe' element={<AddRecipe user={user}/>}/>
          <Route path='/FindRecipe' element={<FindRecipe recipes={recipes}/>}/>
          <Route path='/FindedRecipe' element={<FindedRecipe user={user} recipes={recipes}/>}/>
          <Route path='/FavoritesRecipes' element={<FavoritesRecipes user={user}/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/PasswordSendMail' element={<PasswordSendMail/>}/>
          <Route path='/PasswordChange' element={<PasswordChange/>}/>
          <Route path='/MessageDeleteRecipe' element={<MessageDeleteRecipe/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App