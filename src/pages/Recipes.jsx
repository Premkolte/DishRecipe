import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext';
import RecipeCard from '../Components/RecipeCard';

const Recipes = () => {

  const {data} = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} {...recipe} />
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Recipe Collection
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover amazing recipes crafted by our community of food enthusiasts
          </p>
        </div>
        
        {data.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🍳</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">No Recipes Yet</h3>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Be the first to share your culinary masterpiece with the community!
            </p>
            <button 
              onClick={() => window.location.href = '/create-recipe'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Create First Recipe
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-300">
                Found <span className="text-blue-400 font-semibold">{data.length}</span> amazing recipes
              </p>
              <button 
                onClick={() => window.location.href = '/create-recipe'}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                + Add Recipe
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-x-3'>
              {renderRecipes}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Recipes