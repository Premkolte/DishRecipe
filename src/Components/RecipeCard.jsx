import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {

    const {id, url, categories, description, title, ingredients, instructions } = props;
    
    // Convert ingredients string to array if it's a string
    const ingredientsArray = typeof ingredients === 'string' 
      ? ingredients.split(',').map(item => item.trim()) 
      : ingredients || [];
      
  return (
        <Link className='w-[23vw] rounded overflow-hidden bg-gray-700 p-4 block hover:bg-gray-600 transition-colors' to={`/recipes/details/${id}`}>
          <img src={url} alt={title} className='w-full h-48 object-cover mb-2 rounded' />
          <h2 className='text-xl font-semibold mb-2'>{title}</h2>
          <p className='text-gray-400 mb-2'>{description}</p>
          <div className='text-sm text-gray-300 mb-2'>
            <span className='bg-gray-600 px-2 py-1 rounded'>{categories}</span>
          </div>
          <h3 className='text-lg font-semibold mb-1'>Ingredients:</h3>
          <ul className='list-disc list-inside mb-2 text-sm'>
            {ingredientsArray.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            {ingredientsArray.length > 3 && <li>...and more</li>}
          </ul>
          <h3 className='text-lg font-semibold mb-1'>Instructions:</h3>
          <p className='text-sm text-gray-300 line-clamp-2'>{instructions.length > 100 ? instructions.substring(0, 100) + '...' : instructions}</p>
        </Link>
  )
}

export default RecipeCard;