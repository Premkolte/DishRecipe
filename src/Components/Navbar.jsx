import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex gap-2 items-center'>
        <NavLink 
            className={(e) => `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              e.isActive 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
            }`}
            to="/" 
        >
          Home
        </NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              e.isActive 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
            }`}
            to="/about"
        >
          About
        </NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              e.isActive 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
            }`}
            to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              e.isActive 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
            }`}
            to="/create-recipe"
        >
          Create
        </NavLink>
        <NavLink 
            className={(e) => `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              e.isActive 
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
            }`}
            to="/favorites"
        >
          Favorites
        </NavLink>
    </nav>
  )
}

export default Navbar