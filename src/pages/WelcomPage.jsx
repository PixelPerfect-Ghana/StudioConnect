const WelcomeSection = ({ name }) => {
    return (
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-semibold">Welcome, {name}!</h1>
        <p className="mt-2">Here’s what’s happening with your account today.</p>
      </div>
    );
  };
  
  export default WelcomeSection;