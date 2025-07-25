import React, { useContext } from 'react'
import { recipecontext } from '../Context/RecipeContext';
import RecipeCard from '../Components/RecipeCard';

const Recipes = () => {

  const {data} = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} {...recipe} />
  })

  return (
    <div>
      <h2 className='text-2xl font-bold mb-6'>All Recipes</h2>
      {data.length === 0 ? (
        <p className='text-gray-400'>No recipes found. Create your first recipe!</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {renderRecipes}
        </div>
      )}
    </div>
  )
}

export default Recipes