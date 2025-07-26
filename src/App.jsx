
import Mainroutes from './routes/Mainroutes'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();
  const isSingleRecipePage = location.pathname.includes('/recipes/details/');

  return (
    <div className="min-h-screen flex flex-col text-white bg-gradient-to-br from-gray-900 to-gray-800">
      {!isSingleRecipePage && (
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DishRecipe
                </h1>
                <span className="text-gray-400 text-sm hidden md:block">
                  Your Culinary Companion
                </span>
              </div>
              <Navbar />
            </div>
          </div>
        </header>
      )}
      
      <main className="flex-1">
        <Mainroutes />
      </main>
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-gray-800 text-white border border-gray-600"
      />
    </div>
  )
}

export default App
  