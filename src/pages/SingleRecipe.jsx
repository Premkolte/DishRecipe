import React,{ useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { recipecontext } from '../Context/RecipeContext';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const navigate = useNavigate();
  const {data, setdata} = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((item) => item.id === params.id);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe || {});
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  console.log('Params ID:', params.id);
  console.log('All data:', data);
  console.log('Found recipe:', recipe);

  const handleEdit = () => {
    setIsEditing(true);

    setEditedRecipe(recipe);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedRecipe(recipe);
  };

  const handleSave = () => {
    if (!editedRecipe.title || !editedRecipe.description || !editedRecipe.ingredients || !editedRecipe.instructions) {
      toast.error("Please fill in all required fields");

      return;
    }

    const updatedData = data.map(item => 
      item.id === params.id ? editedRecipe : item
    );
    
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    setIsEditing(false);
    toast.success("Recipe updated successfully!");
  };

  const handleInputChange = (field, value) => {
    setEditedRecipe(prev => ({
      ...prev,
      [field]: value
    }));
  };


  // useEffect(()=>{
  //   console.log('Favorites updated:', favorites);
  //   return ()=>{
  //     console.log('Cleanup function called');
  //   }
  // },[favorites]);

  const FavHandler = () => {
    const updatedFavorites = [...favorites, recipe];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('favoritesUpdated'));
    
    toast.success("Added to favorites!");
  };  

  const UnFavHandler = () => {
    const updatedFavorites = favorites.filter(item => item.id !== recipe?.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('favoritesUpdated'));
    
    toast.error("Removed from favorites!");
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Header with back button */}
      <div className="bg-gray-900 p-4 flex items-center justify-between">
        <button 
          onClick={() => navigate('/recipes')}
          className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-colors"
        >
          <span>←</span>
          <span>Back to Recipes</span>
        </button>
        
        <h1 className="text-xl font-bold">
          {isEditing ? 'Edit Recipe' : 'Recipe Details'}
        </h1>
        
        <div className="flex space-x-2">
          {!isEditing ? (
            <button 
              onClick={handleEdit}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition-colors"
            >
              Edit Recipe
            </button>
          ) : (
            <>
              <button 
                onClick={handleCancel}
                className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition-colors"
              >
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>

      {/* Recipe content */}
      <div className="p-6">
        {recipe ? (
          <div className="max-w-4xl mx-auto bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            {/* Image Section */}
            <div className="relative">
              <img 
                src={isEditing ? editedRecipe.url : recipe.url} 
                alt={isEditing ? editedRecipe.title : recipe.title} 
                className="w-full h-64 object-cover"
              />
              {isEditing && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <input 
                    type="url"
                    value={editedRecipe.url || ''}
                    onChange={(e) => handleInputChange('url', e.target.value)}
                    placeholder="Image URL"
                    className="w-full px-2 py-1 rounded bg-gray-800 text-white border border-gray-600"
                  />
                </div>
              )}



              
              {favorites.find((f)=>f.id == recipe?.id) ? (
                <i onClick={UnFavHandler} className="pt-5 text-red-500 text-3xl absolute right-[10%] ri-heart-fill"></i>
              ) :
              <i onClick={FavHandler} className="pt-5 text-red-500 text-3xl absolute right-[10%] ri-heart-line"></i>
              }





            </div>
            
            <div className="p-6">
              {/* Title and Category */}
              <div className="flex justify-between items-start mb-4">
                {isEditing ? (
                  <input 
                    type="text"
                    value={editedRecipe.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="text-3xl font-bold text-white bg-transparent border-b border-gray-500 outline-none flex-1 mr-4"
                    placeholder="Recipe Title"
                  />
                ) : (
                  <h2 className='text-3xl font-bold text-white'>{recipe.title}</h2>
                )}
                
                {isEditing ? (
                  <select 
                    value={editedRecipe.categories || ''}
                    onChange={(e) => handleInputChange('categories', e.target.value)}
                    className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm border border-gray-500"
                  >
                    <option value="">Select Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="dinner">Dinner</option>
                  </select>
                ) : (
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                    {recipe.categories}
                  </span>
                )}
              </div>
              
              {/* Description */}
              {isEditing ? (
                <textarea 
                  value={editedRecipe.description || ''}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full text-gray-300 text-lg mb-6 bg-transparent border border-gray-500 rounded p-2 resize-none"
                  rows="3"
                  placeholder="Recipe Description"
                />
              ) : (
                <p className="text-gray-300 text-lg mb-6">{recipe.description}</p>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ingredients */}
                <div>
                  <h3 className='text-xl font-semibold text-white mb-3'>Ingredients:</h3>
                  {isEditing ? (
                    <textarea 
                      value={editedRecipe.ingredients || ''}
                      onChange={(e) => handleInputChange('ingredients', e.target.value)}
                      className="w-full text-gray-300 bg-transparent border border-gray-500 rounded p-2 resize-none"
                      rows="8"
                      placeholder="Ingredients separated by commas"
                    />
                  ) : (
                    <ul className='list-disc list-inside space-y-1'>
                      {recipe.ingredients.split(',').map((ingredient, index) => (
                        <li key={index} className="text-gray-300">{ingredient.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Instructions */}
                <div>
                  <h3 className='text-xl font-semibold text-white mb-3'>Instructions:</h3>
                  {isEditing ? (
                    <textarea 
                      value={editedRecipe.instructions || ''}
                      onChange={(e) => handleInputChange('instructions', e.target.value)}
                      className="w-full text-gray-300 bg-transparent border border-gray-500 rounded p-2 resize-none"
                      rows="8"
                      placeholder="Write Instructions"
                    />
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{recipe.instructions}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className='text-2xl font-bold text-white mb-4'>Recipe Not Found</h2>
            <p className="text-gray-400 mb-4">The recipe you're looking for doesn't exist or may have been removed.</p>
            <button 
              onClick={() => navigate('/recipes')} 
              className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors"
            >
              Back to Recipes
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleRecipe