import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaUserCircle, FaBell } from "react-icons/fa";
import Sidebar from "./layout/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.info("Logged out successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                <FaBars className="h-6 w-6" />
              </button>

              
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-green-600 hover:text-green-800">
                  <FaHome className="h-6 w-6" />
                </Link>
                <span className="font-bold text-xl text-gray-800">
                  Studio Dashboard
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <FaBell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <FaUserCircle className="h-6 w-6" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <FaSignOutAlt className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      
      <div className="flex pt-16">
        
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />

        
        <main className="flex-1 p-6 lg:p-8 min-h-[calc(100vh-4rem)]">
          
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <h1 className="text-2xl font-bold">
            Welcome to the Studio Dashboard
          </h1>
          <p className="mt-4 text-gray-700">
            Manage your studios, bookings, and user interactions here.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
