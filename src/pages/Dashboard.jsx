// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import WelcomeSection from './sections/WelcomeSection';
import StudioDiscovery from './sections/User/StudioDiscovery';
import Bookings from './sections/User/Bookings';
import Favorites from './sections/User/Favorites';
import MyStudios from './sections/StudioOwner/MyStudios';
import BookingsManagement from './sections/StudioOwner/BookingsManagement';
import StudioAnalytics from './sections/StudioOwner/StudioAnalytics';
import StudioManagement from './sections/StudioOwner/StudioManagement';
import UserManagement from './sections/Admin/UserManagement';
import StudioVerification from './sections/Admin/StudioVerification';
import ReportsFeedback from './sections/Admin/ReportsFeedback';
import AnalyticsDashboard from './sections/Admin/AnalyticsDashboard';

const Dashboard = ({ user }) => {
  const role = user.role;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={role} />
      <div className="flex-1 p-8 overflow-y-auto">
        <WelcomeSection name={user.name} />

        {/* Role-Specific Sections */}
        {role === 'User' && (
          <div>
            <StudioDiscovery />
            <Bookings />
            <Favorites />
          </div>
        )}

        {role === 'StudioOwner' && (
          <div>
            <MyStudios />
            <BookingsManagement />
            <StudioAnalytics />
            <StudioManagement />
          </div>
        )}

        {role === 'Admin' && (
          <div>
            <UserManagement />
            <StudioVerification />
            <ReportsFeedback />
            <AnalyticsDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
