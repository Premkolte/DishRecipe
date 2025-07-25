import React from 'react'
import TextType from '../Components/TextType';

const About = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center text-3">
        <TextType 
          text={["Welcome to DishRecipe", "Create Amazing Recipes", "Share Your Culinary Art", "Happy Cooking!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <p className="text-gray-300 text-lg mt-8 max-w-2xl">
          Discover, create, and share delicious recipes with our amazing community of food lovers.
        </p>
      </div>
    </div>
  )
}

export default About