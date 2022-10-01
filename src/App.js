import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react';
import { Home } from './components/Home';
import { AddRecipe } from './components/AddRecipe';
import { FindRecipe } from './components/FindRecipe';
import { ModifyRecipe } from './components/ModifyRecipe';
import { FavoritesRecipes } from './components/FavoritesRecipes';


function App() {

  return (
    <div className="App">
      
      <h1>Cook Home</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddRecipe' element={<AddRecipe/>}/>
          <Route path='/FindRecipe' element={<FindRecipe/>}/>
          <Route path='/ModifyRecipe' element={<ModifyRecipe/>}/>
          <Route path='/FavoritesRecipes' element={<FavoritesRecipes/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;