// Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">StudioConnect</h2>
      <nav>
        <Link to="/dashboard" className="block py-2">Home</Link>

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
