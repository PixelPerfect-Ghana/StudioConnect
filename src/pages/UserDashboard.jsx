import React from 'react'

const UserDashboard=() =>{
  return (
    <div  id="UserDashboard">
        <h2 className="text-2xl font-semibold mb-4">User Overview</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-white shadow rounded">
        <h3 className="text-xl font-bold mb-2">Browse Studios</h3>
        <p>Explore and find the perfect studio for your needs.</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h3 className="text-xl font-bold mb-2">My Bookings</h3>
        <p>View and manage your studio bookings.</p>
      </div>
    </div>
    </div>
  )
}

export default UserDashboard