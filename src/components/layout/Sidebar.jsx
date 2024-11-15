import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  const [loading, setLoading]=useState(false);
  const navigate = useNavigate(); 
 const handleLogout =() => {
  setLoading(true)
  localStorage.removeItem("token");

  toast.success("you are logging out")
  navigate("/HomePage")

 }
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">PixelPerfect</h2>
      <nav>
        <Link to="/dashboard" className="block py-2">Home</Link>
        <a href="" onClick={handleLogout} className='block py-2'>Logout </a>

        {/* Links specific to each user role */}
        {userRole === 'User' && (
          <>
            <Link to="/explore" className="block py-2">Explore Studios</Link>
            <Link to="/bookings" className="block py-2">My Bookings</Link>
          </>
        )}
        {userRole === 'StudioOwner' && (
          <>
            <Link to="/manage-studios" className="block py-2">Manage Studios</Link>
            <Link to="/bookings" className="block py-2">View Bookings</Link>
          </>
        )}
        {userRole === 'Admin' && (
          <>
            <Link to="/manage-users" className="block py-2">Manage Users</Link>
            <Link to="/analytics" className="block py-2">Analytics</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
