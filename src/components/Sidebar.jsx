import { Link, useNavigate, NavLink } from "react-router-dom";

import {
  FaSignOutAlt,
  FaHome,
  FaCompass,
  FaCalendarAlt,
  FaCogs,
  FaUserTie,
} from "react-icons/fa";

const navItems = [
  {
    icon: FaHome,
    path: "/dashboard",
    label: "Home",
    showFor: ["user", "vendor"],
  },
  {
    icon: FaCompass,
    path: "/dashboard/studios",
    label: "Explore Studios",
    showFor: ["user"],
  },
  {
    icon: FaCalendarAlt,
    path: "/dashboard/bookings",
    label: "My Bookings",
    showFor: ["user"],
  },
  {
    icon: FaCogs,
    path: "/dashboard/manage-studios",
    label: "Manage Studios",
    showFor: ["vendor"],
  },
  {
    icon: FaCalendarAlt,
    path: "/dashboard/vendor-bookings",
    label: "View Bookings",
    showFor: ["vendor"],
  },
  {
    icon: FaUserTie,
    path: "/dashboard/studios/add",
    label: "Become a Vendor",
    showFor: ["user"],
  },
];

const Sidebar = () => {
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.info("Logged out successfully!");
  };

  return (
    <div className="w-64 bg-black/90 text-white h-screen p-4 flex flex-col gap-y-8 py-10 fixed z-50 left-0">
      <Link
        to="/"
        className="text-3xl font-bold text-center text-green-500 mb-4"
      >
        PixelPerfect
      </Link>
      <nav className=" flex flex-col text-base gap-y-4">
        {navItems
          .filter((item) => item.showFor.includes(userRole))
          .map(({ icon: Icon, path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-x-4 py-2 px-3 rounded-md ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-500 hover:text-white"
                }`
              }
              end
            >
              <Icon className="size-6" />
              {label}
            </NavLink>
          ))}
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-x-4 py-2 px-3 rounded-md bg-green-500 text-white mt-auto"
      >
        <FaSignOutAlt className="h-6 w-6" /> <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
