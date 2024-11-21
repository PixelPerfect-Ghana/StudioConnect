import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.info("Logged out successfully!");
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col py-10">
      <h2 className="text-2xl font-bold mb-4">PixelPerfect</h2>
      <nav className="mt-4">
        <Link to="/dashboard" className="block py-2">
          Home
        </Link>

        {/* Links specific to each user role */}
        {userRole === "user" && (
          <>
            <Link to="/dashboard/allstudios" className="block py-2">
              Explore Studios
            </Link>
            <Link to="/bookings" className="block py-2">
              My Bookings
            </Link>
          </>
        )}
        {userRole === "vendor" && (
          <>
            <Link to="/manage-studios" className="block py-2">
              Manage Studios
            </Link>
            <Link to="/bookings" className="block py-2">
              View Bookings
            </Link>
          </>
        )}
      </nav>
      <button
        onClick={handleLogout}
        className="p-2 text-white hover:text-gray-500 flex gap-x-2 mt-auto"
      >
        <FaSignOutAlt className="h-6 w-6" /> <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
