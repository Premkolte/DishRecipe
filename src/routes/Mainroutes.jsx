import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import Favorites from '../pages/Favorites'




const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />}  />
      <Route path="/favorites" element={<Favorites />}  />
    </Routes>
  )
}

export default Mainroutes