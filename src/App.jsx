import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import BookingForm from "./components/forms/BookingForm";
import HomePage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import AddStudioForm from "./components/forms/AddStudioForm";
import PrivacyPolicy from "./components/forms/PrivacyPolicy";
import StudioDetails from "./pages/StudioDetails";
import StudioList from "./pages/StudioList";
import UpdateStudioForm from "./components/forms/UpdateStudioForm";
import VendorStudios from "./pages/VendorStudios";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/dashboard/Home";

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
      path: "/addstudio",
      element: <AddStudioForm />,
    },
    {
      path: "/privacy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "allstudios",
          element: <StudioList />,
        },
      ],
    },
    {
      path: "booking",
      element: <BookingForm />,
    },
    {
      path: "vendor-studios",
      element: <VendorStudios />,
    },
    {
      path: "/singlestudio/:id",
      element: <StudioDetails />,
    },

    {
      path: "/edit-studio/:id",
      element: <UpdateStudioForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
