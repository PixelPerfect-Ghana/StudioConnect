import React from 'react'

const VendorDashboard=() =>{
  return (
    <div id= "VendorDashboard">
        <h2 className="text-2xl font-semibold mb-4">Vendor Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-white shadow rounded">
        <h3 className="text-xl font-bold mb-2">Manage studios</h3>
        <p>Update, add images, or delete your studio.</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h3 className="text-xl font-bold mb-2">Bookings</h3>
        <p>View and manage incoming orders.</p>
      </div>
    </div>
    </div>
  )
    
}

export default VendorDashboard








