import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='mb-10 flex gap-10 items-center justify-center'>
        <NavLink 
            className={(e) => `px-4 py-2 hover:bg-gray-700 rounded ${e.isActive ? "text-pink-600" : ""}`}
            to="/" >Home</NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 hover:bg-gray-700 rounded ${e.isActive ? "text-pink-600" : ""}`}
            to="/about">About</NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 hover:bg-gray-700 rounded ${e.isActive ? "text-pink-600" : ""}`}
            to="/recipes">Recipes</NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 hover:bg-gray-700 rounded ${e.isActive ? "text-pink-600" : ""}`}
            to="/create-recipe">Create</NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 hover:bg-gray-700 rounded ${e.isActive ? "text-pink-600" : ""}`}
            to="/favorites">Favorites</NavLink>
    </div>
  )
}

export default Navbar