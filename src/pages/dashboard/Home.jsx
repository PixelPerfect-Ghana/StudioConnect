import React from "react";

const Home = () => {
  return (
    <main className="flex-1 pt-10 px-16">
      {/* {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
        onClick={() => setSidebarOpen(false)}
      />
    )} */}
      <h1 className="text-2xl font-bold">Welcome to the Studio Dashboard</h1>
      <p className="mt-4 text-gray-700">
        Manage your studios, bookings, and user interactions here.
      </p>
    </main>
  );
};

export default Home;
