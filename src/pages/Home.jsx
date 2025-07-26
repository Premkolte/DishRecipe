// import { get } from 'http';
import axios from '../Utils/axios.jsx';
import React, { useEffect } from 'react'
import GlitchText from '../Components/GlitchText.jsx';

const Home = () => {
  const getproducts = async () => {
    try
    {
      const response = await axios.get('/products');
      // console.log('Products fetched successfully:', response);
      console.log(response.data);
    }
    catch (error) {
      console.error('Error fetching products:', error);
    }
  };



  useEffect(() => {
    console.log('Home component mounted');
    getproducts();  // yeh auto matic call hoga jab component mount hoga
    // Cleanup function to run when the component unmounts
    // This is useful for cleanup tasks like cancelling requests or removing event listeners. 
    return () => {
      console.log('Home component unmounted');
    }
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={false}
            >
              DishRecipe
            </GlitchText>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover, Create & Share Amazing Recipes with Food Lovers Around the World
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.location.href = '/recipes'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Recipes
            </button>
            <button 
              onClick={() => window.location.href = '/create-recipe'}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Create Recipe
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose DishRecipe?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Easy Creation</h3>
              <p className="text-gray-300">Create and share your recipes with our intuitive recipe builder</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Save Favorites</h3>
              <p className="text-gray-300">Keep track of your favorite recipes and access them anytime</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Edit & Customize</h3>
              <p className="text-gray-300">Modify recipes to match your taste and dietary preferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Cooking?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of food enthusiasts and start your culinary journey today!
          </p>
          <button 
            onClick={() => window.location.href = '/create-recipe'}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Create Your First Recipe
          </button>
        </div>
      </section>
    </div>
  )
}


export default Home