import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/forms/BookingForm";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import PrivacyPolicy from "./components/forms/PrivacyPolicy";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddStudioForm from "./components/forms/AddStudioForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "./pages/auth/AuthGuard";
import StudioAdv from "./pages/StudiosAdv";
import StudioList from "./pages/StudioList";
import StudioDetails from "./pages/StudioDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/BookingForm",
      element: <BookingForm />,
    },
    {
      path: "/LoginForm",
      element: <LoginForm />,
    },
    {
      path: "/SignupForm",
      element: <SignupForm />,
    },
    {
      path: "/LandingPage",
      element: <LandingPage />,
    },
    {
      path: "/StudioAdv",
      element: <StudioAdv/>,
    },
    {
      path: "/HomePage",
      element: <Homepage />,
    },
    {
      path: "/PrivacyPolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/footer",
      element: <Footer />,
    },

    {
      path: "/Sidebar",
      element: <Sidebar />,
    },
    {
      path: "/Dashboard",
      element: (
        // <AuthGuard>
          <Dashboard />
        // </AuthGuard>
      ),
    },
    {
      path: "/studioDetails",
      element: <StudioDetails />,
    },
    {
      path: "/AddStudio",
      element: <AddStudioForm />,
    },
    {
      path: "/studioList",
      element: <StudioList />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
