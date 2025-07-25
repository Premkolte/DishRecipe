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


    recipe.id = nanoid();
    // Here you can handle the form submission, e.g., send data to an API

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    //or
    // setdata([...data, recipe]);

    localStorage.setItem("recipes", JSON.stringify(copydata)); // local storage mei save karna.
    local

    toast.success("Recipe created successfully!");
    reset();

    navigate("/recipes");
  }

  console.log(data);

  return (
   <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col  gap-5'>
      <input 
        className='block border-b outline-none bg-transparent text-white py-2'
        {...register("url", { 
          required: "Recipe image URL is required",
          pattern: {
            value: /^https?:\/\/.+/,
            message: "Please enter a valid URL"
          }
        })} 
        type="url" 
        placeholder="Recipe Image URL" 
      />
      {errors.url && <small className='text-red-500'>{errors.url.message}</small>}

      <input 
        className='block border-b outline-none bg-transparent text-white py-2'
        {...register("title", { 
          required: "Recipe title is required",
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters"
          }
        })} 
        type="text" 
        placeholder="Recipe Title" 
        />
      {errors.title && <small className='text-red-500'>{errors.title.message}</small>}

      <input 
        className='block border-b outline-none bg-transparent text-white py-2'
        {...register("description", { 
          required: "Description is required",
          minLength: {
            value: 10,
            message: "Description must be at least 10 characters"
          }
        })} 
        type="text" 
        placeholder="description" 
      />
      {errors.description && <small className='text-red-500'>{errors.description.message}</small>}

      <input 
        className='block border-b outline-none bg-transparent text-white py-2'
        {...register("ingredients", { 
          required: "Ingredients are required"
        })} 
        type="text" 
        placeholder="Ingredients separated by commas" 
      />
      {errors.ingredients && <small className='text-red-500'>{errors.ingredients.message}</small>}

      <input 
        className='block border-b outline-none bg-transparent text-white py-2'
        {...register("instructions", { 
          required: "Instructions are required",
          minLength: {
            value: 20,
            message: "Instructions must be at least 20 characters"
          }
        })} 
        type="text" 
        placeholder="Write Instructions" 
      />
      {errors.instructions && <small className='text-red-500'>{errors.instructions.message}</small>}

      <select 
        className='block border-b outline-none bg-transparent text-white py-2'
        {...register("categories", { 
          required: "Please select a category"
        })} 
      >
        <option value="">Select Category</option>
        <option value="breakfast">breakfast</option>
        <option value="lunch">lunch</option>
        <option value="snack">snack</option>
        <option value="dinner">dinner</option>
      </select>
      {errors.categories && <small className='text-red-500'>{errors.categories.message}</small>}

      
      <br/>
      <button className=' bg-gray-900 text-white py-2 px-4 mt-5 rounded'>Save Recipe</button>
   </form>
  )
}

export default Create