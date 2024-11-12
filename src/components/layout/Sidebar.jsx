const Sidebar = ({ role }) => {
    return (
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          
          {role === 'User' && (
            <>
              <li className="hover:bg-gray-700 p-2 rounded">Studio Discovery</li>
              <li className="hover:bg-gray-700 p-2 rounded">Bookings</li>
              <li className="hover:bg-gray-700 p-2 rounded">Favorites</li>
            </>
          )}
  
          {role === 'StudioOwner' && (
            <>
              <li className="hover:bg-gray-700 p-2 rounded">My Studios</li>
              <li className="hover:bg-gray-700 p-2 rounded">Bookings Management</li>
              <li className="hover:bg-gray-700 p-2 rounded">Studio Analytics</li>
              <li className="hover:bg-gray-700 p-2 rounded">Studio Management</li>
            </>
          )}
  
          {role === 'Admin' && (
            <>
              <li className="hover:bg-gray-700 p-2 rounded">User Management</li>
              <li className="hover:bg-gray-700 p-2 rounded">Studio Verification</li>
              <li className="hover:bg-gray-700 p-2 rounded">Reports & Feedback</li>
              <li className="hover:bg-gray-700 p-2 rounded">Analytics Dashboard</li>
            </>
          )}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;