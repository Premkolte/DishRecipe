import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {recipecontext} from '../Context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const { data, setdata } = useContext(recipecontext);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const SubmitHandler = (recipe) => {
    console.log('Form data submitted:', recipe); // Debug log

    recipe.id = nanoid();
    
    // Update context data
    const updatedData = [...data, recipe];
    setdata(updatedData);

    // Save to localStorage
    localStorage.setItem("recipes", JSON.stringify(updatedData));

    console.log('Updated data:', updatedData); // Debug log

    toast.success("Recipe created successfully!");
    reset();

    navigate("/recipes");
  }

  console.log(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create New Recipe
          </h1>
          <p className="text-gray-300 text-lg">
            Share your culinary masterpiece with the world
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-6'>
            
            {/* Recipe Image URL */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Recipe Image URL *
              </label>
              <input 
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
                {...register("url", { 
                  required: "Recipe image URL is required",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "Please enter a valid URL"
                  }
                })} 
                type="url" 
                placeholder="https://example.com/recipe-image.jpg" 
              />
              {errors.url && <p className='text-red-400 text-sm mt-1'>{errors.url.message}</p>}
            </div>

            {/* Recipe Title */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Recipe Title *
              </label>
              <input 
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
                {...register("title", { 
                  required: "Recipe title is required",
                  minLength: {
                    value: 3,
                    message: "Title must be at least 3 characters"
                  }
                })} 
                type="text" 
                placeholder="e.g., Delicious Chocolate Cake" 
              />
              {errors.title && <p className='text-red-400 text-sm mt-1'>{errors.title.message}</p>}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Description *
              </label>
              <textarea 
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none'
                {...register("description", { 
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters"
                  }
                })} 
                rows="3"
                placeholder="Brief description of your recipe..."
              />
              {errors.description && <p className='text-red-400 text-sm mt-1'>{errors.description.message}</p>}
            </div>

            {/* Ingredients */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Ingredients *
              </label>
              <textarea 
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none'
                {...register("ingredients", { 
                  required: "Ingredients are required"
                })} 
                rows="4"
                placeholder="2 cups flour, 1 cup sugar, 3 eggs, 1/2 cup butter..."
              />
              {errors.ingredients && <p className='text-red-400 text-sm mt-1'>{errors.ingredients.message}</p>}
              <p className="text-gray-400 text-xs">Separate each ingredient with a comma</p>
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Instructions *
              </label>
              <textarea 
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none'
                {...register("instructions", { 
                  required: "Instructions are required",
                  minLength: {
                    value: 20,
                    message: "Instructions must be at least 20 characters"
                  }
                })} 
                rows="6"
                placeholder="Step-by-step cooking instructions..."
              />
              {errors.instructions && <p className='text-red-400 text-sm mt-1'>{errors.instructions.message}</p>}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Category *
              </label>
              <select 
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300'
                {...register("categories", { 
                  required: "Please select a category"
                })} 
              >
                <option value="" className="bg-gray-800">Select Category</option>
                <option value="breakfast" className="bg-gray-800">Breakfast</option>
                <option value="lunch" className="bg-gray-800">Lunch</option>
                <option value="snack" className="bg-gray-800">Snack</option>
                <option value="dinner" className="bg-gray-800">Dinner</option>
              </select>
              {errors.categories && <p className='text-red-400 text-sm mt-1'>{errors.categories.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit"
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
              >
                Create Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create