import React from "react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Vendor Dashboard</h2>
      <ul>
        <li>
          <Link to="/addstudio" className="text-blue-500 hover:underline">
            Add a new studio
          </Link>
        </li>
        <li>
          <Link to="/vendor-studios" className="text-blue-500 hover:underline">
            Manage your studios
          </Link>
        </li>
        <li>Check booking requests</li>
      </ul>
    </div>
  );
};

export default VendorDashboard;
