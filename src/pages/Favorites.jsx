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
    <div>
      <h2 className='text-2xl font-bold mb-6'>All Favorites</h2>
      {favv.length === 0 ? (
        <p className='text-gray-400'>No Favorite found. Create your first recipe!</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {renderFavv}
        </div>
      )}
    </div>
  )
}

export default Favorites