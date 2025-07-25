
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import { BrowserRouter } from 'react-router-dom' 
import RecipeContextProvider from './Context/RecipeContext'


createRoot(document.getElementById('root')).render(
  <RecipeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </RecipeContextProvider>
)
