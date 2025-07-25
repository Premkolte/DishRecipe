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
    <div>
      <h1>Home</h1>
      <button onClick={getproducts}>Fetch Products</button>

      <GlitchText
    speed={1}
    enableShadows={true}
    enableOnHover={true}
    className='custom-class'
  >
    Your Recipe Explorer!
  </GlitchText>

    </div>
  )
}


export default Home