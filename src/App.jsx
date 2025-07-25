
import Mainroutes from './routes/Mainroutes'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();
  const isSingleRecipePage = location.pathname.includes('/recipes/details/');

  return (
    <div className="w-screen h-screen flex flex-col text-white bg-gray-800 font-thin">
      {!isSingleRecipePage && (
        <>
          <div className="py-10 px-10">
            <h1 className="text-4xl font-bold mb-10">Welcome to DishRecipe</h1>
            <Navbar />
          </div>
        </>
      )}
      
      <div className={`${!isSingleRecipePage ? 'px-10 pb-10' : ''} flex-1 overflow-auto`}>
        <Mainroutes />
      </div>
      
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
      />
    </div>
  )
}

export default App
  