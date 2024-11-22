import { useState } from "react";
import { FaHome, FaBars, FaUserCircle, FaBell } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex w-full relative">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex flex-col w-full relative `}>
        <nav
          className={`bg-white shadow-md w-full flex h-16 z-40  items-center px-4 fixed ${
            isSidebarOpen ? "left-64" : "left-20"
          }`}
        >
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md  text-gray-900 hover:text-green-500  "
          >
            <FaBars className="h-6 w-6" />
          </button>

          <div
            className={`flex items-center gap-x-3 ml-auto ${
              isSidebarOpen ? "mr-64" : "mr-20"
            }`}
          >
            <button to="/" className="text-gray-900 hover:text-green-500">
              <FaHome className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-900 hover:text-green-500">
              <FaBell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-900 hover:text-green-500">
              <FaUserCircle className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <div
          className={`h-full flex justify-center mt-24 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
