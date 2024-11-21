import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingForm from './components/forms/BookingForm';
import Dashboard from './components/Dashboard';
import HomePage from './pages/Homepage';
import LandingPage from './pages/LandingPage';
import LoginForm from './components/forms/LoginForm';
import SignupForm from './components/forms/SignupForm';
import AddStudioForm from './components/forms/AddStudioForm';
import PrivacyPolicy from './components/forms/PrivacyPolicy';
import StudioDetails from './pages/StudioDetails';
import StudioList from './pages/StudioList';
import UpdateStudioForm from './components/forms/UpdateStudioForm';
import VendorStudios from './pages/VendorStudios';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/landingpage",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/booking",
      element: <BookingForm />,
    },
    {
      path: "/addstudio",
      element: <AddStudioForm />,
    },
    {
      path: "/privacy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/singlestudio",
      element: <StudioDetails />,
    },
    {
      path: "/allstudios",
      element: <StudioList />,
    },
    {
      path: "/vendor-studios",
      element: <VendorStudios />,
    },
    {
      path: "/edit-studio/:id",
      element: <UpdateStudioForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer /> 
    </>
  );
}

export default App;
