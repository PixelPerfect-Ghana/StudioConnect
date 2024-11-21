import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/forms/BookingForm";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import AddStudioForm from "./components/forms/AddStudioForm";
import PrivacyPolicy from "./components/forms/PrivacyPolicy";
import StudioDetails from "./pages/studio/StudioDetails";
import StudioList from "./pages/studio/StudioList";
import UpdateStudioForm from "./components/forms/UpdateStudioForm";
import VendorStudios from "./pages/studio/VendorStudios";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/dashboard/Home";
import Bookings from "./pages/dashboard/Bookings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
          path: "studios",
          element: <StudioList />,
        },
        {
          path: "studios/add",
          element: <AddStudioForm />,
        },
        {
          path: "bookings",
          element: <Bookings />,
        },
        {
          path: "bookings/add",
          element: <BookingForm />,
        },
        {
          path: "vendor-studios",
          element: <VendorStudios />,
        },
        {
          path: "singlestudio/:id",
          element: <StudioDetails />,
        },

        {
          path: "edit-studio/:id",
          element: <UpdateStudioForm />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
