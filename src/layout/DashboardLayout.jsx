import { useState } from "react";
import { FaHome, FaBars, FaUserCircle, FaBell } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex w-full">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex flex-col w-full">
        <nav className="bg-white shadow-md  w-full flex h-16 z-50 items-center px-4">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 mr-auto"
          >
            <FaBars className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-x-3">
            <button to="/" className="text-gray-600 hover:text-gray-900">
              <FaHome className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <FaBell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <FaUserCircle className="h-6 w-6" />
            </button>
          </div>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
