import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { AddRecipe } from './components/AddRecipe';
import { FindRecipe } from './components/FindRecipe';
import { FindedRecipe } from './components/FindedRecipe';
import { ModifyRecipe } from './components/ModifyRecipe';
import { FavoritesRecipes } from './components/FavoritesRecipes';


function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="entete">
      <h1>Cook Home</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddRecipe' element={<AddRecipe/>}/>
          <Route path='/FindRecipe' element={<FindRecipe/>}/>
          <Route path='/FindedRecipe' element={<FindedRecipe/>}/>
          <Route path='/ModifyRecipe' element={<ModifyRecipe/>}/>
          <Route path='/FavoritesRecipes' element={<FavoritesRecipes/>}/>
        </Routes>
      </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;