import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import VendorDashboard from "./VendorDashboard";
import UserDashboard from "./UserDashboard";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const userRole = "Vendor";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/HomePage');
    toast.info('Logged out successfully');
  };

  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-gray-500 text-white p-4 flex flex-col h-full">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul>
          {userRole === "Vendor" && (
            <>
              <li className="mb-4">
                <a href="#VendorDashboard" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#manage-studio" className="hover:underline">
                  Manage studio
                </a>
              </li>
              <li className="mb-4">
                <a href="#booking" className="hover:underline">
                  Bookings
                </a>
              </li>
              <li className="mb-4">
                <a onClick={handleLogout} className="hover:underline cursor-pointer">
                  Logout
                </a>
              </li>
            </>
          )}

          {userRole === "User" && (
            <>
              <li className="mb-4">
                <a href="#UserDashboard" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="#browse-studios" className="hover:underline">
                  Browse Studios
                </a>
              </li>
              <li className="mb-4">
                <a onClick={handleLogout} className="hover:underline cursor-pointer">
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>

        {/* Profile and icon */}
        <div className="mt-auto flex items-center gap-4 p-4 bg-gray-700 rounded">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-400">{userRole}</p>
          </div>
          <div className="cursor-pointer hover:text-gray-300">
            <IoSettingsOutline size={24}/>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-black text-white">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome, {userRole === "Vendor" ? "Vendor" : "User"}!
        </h1>

        {userRole === "Vendor" && <VendorDashboard />}
        {userRole === "User" && <UserDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;