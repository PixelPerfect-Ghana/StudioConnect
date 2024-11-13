
import Sidebar from '../components/layout/Sidebar';

const Dashboard = ({ userRole }) => {
  return (
    <div className="flex">
      <Sidebar userRole={userRole} />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="mt-4">
          {userRole === 'User' && <p>Welcome Back! Discover Studios, Create Lasting Memories .</p>}
          {userRole === 'StudioOwner' && <p>Your Studio, Your Story; Connect with Creators.</p>}
          {userRole === 'Admin' && <p>Your Command Center for Studios and Users.</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
