import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BookingForm from './components/forms/BookingForm'
import LoginForm from './components/forms/LoginForm'
import SignupForm from './components/forms/SignupForm'
import LandingPage from './pages/generalpages/LandingPage'
import Homepage from './pages/generalpages/Homepage'
import PrivacyPolicy from './components/forms/PrivacyPolicy'

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
  ]);
  

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
