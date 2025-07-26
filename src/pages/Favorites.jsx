import React, { useState, useEffect } from 'react'
import RecipeCard from '../Components/RecipeCard';

const Favorites = () => {
  const [favv, setFavv] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const loadFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavv(favorites);
    };
    
    loadFavorites();
    
    // Listen for storage changes to update favorites when modified in other components
    const handleStorageChange = (e) => {
      if (e.key === 'favorites') {
        loadFavorites();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event listener for same-tab updates
    const handleFavoritesUpdate = () => {
      loadFavorites();
    };
    
    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

  const renderFavv = favv.map((recipe) => {
    return <RecipeCard key={recipe.id} {...recipe} />
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Your Favorite Recipes
          </h2>
          <p className="text-gray-300 text-lg">
            Your personal collection of beloved recipes
          </p>
        </div>
        
        {favv.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No Favorites Yet</h3>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Find recipes you love and add them to your favorites for easy access!
            </p>
            <button 
              onClick={() => window.location.href = '/recipes'}
              className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Recipes
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-300">
                You have <span className="text-pink-400 font-semibold">{favv.length}</span> favorite recipes
              </p>
              <button 
                onClick={() => window.location.href = '/recipes'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Find More Recipes
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {renderFavv}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Favorites