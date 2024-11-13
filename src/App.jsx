import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BookingForm from './components/forms/BookingForm'
import LoginForm from './components/forms/LoginForm'
import SignupForm from './components/forms/SignupForm'
import LandingPage from './pages/LandingPage'
import Homepage from './pages/Homepage'
import PrivacyPolicy from './components/forms/PrivacyPolicy'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import AddStudioForm from './components/forms/AddStudioForm'

const App=() => {
  const router=createBrowserRouter([


    {
      path:"/BookingForm",
      element: <BookingForm/>
    },
    {
      path:"/LoginForm",
      element:<LoginForm/>
    },
    {
      path:"/SignupForm",
      element: <SignupForm/>
    },
    {
      path:"/LandingPage",
      element:<LandingPage/>
    },
    {
      path:"/HomePage",
      element:<Homepage/>
    },
    {
      path:"/PrivacyPolicy",
      element: <PrivacyPolicy/>
    },
    {
      path:"/footer",
      element:<Footer/>
    },
   
    {
      path:"/Sidebar",
      element:<Sidebar/>
    },
    {
      path:"/Dashboard",
      element:<Dashboard/>
    },
    {
      path:"/AddStudio",
      element:<AddStudioForm/>
    }

  ]);
  

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
