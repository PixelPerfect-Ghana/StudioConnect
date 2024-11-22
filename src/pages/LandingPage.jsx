import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredStudios, setFilteredStudios] = useState([]);
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // // Fetch studios data
  // useEffect(() => {
  //   const fetchStudios = async () => {
  //     try {
  //       const response = await fetch("API"); 
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch studios");
  //       }
  //       const data = await response.json();
  //       setStudios(data);
  //       setFilteredStudios(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchStudios();
  // }, []);

  const handleSearch = () => {
    const results = studios.filter((studio) => {
      const matchesQuery = query
        ? studio.name.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesLocation = location ? studio.location === location : true;
      const matchesDate = startDate
        ? new Date(studio.availableDate).toDateString() ===
          startDate.toDateString()
        : true;
      return matchesQuery && matchesLocation && matchesDate;
    });
    setFilteredStudios(results);
  };

  return (
    <div className="relative h-screen">
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-black bg-opacity-60 z-50 shadow-md">
        <div className="text-2xl font-bold text-white">PixelPerfect</div>
        <nav className="flex items-center space-x-6">
          <Link to="/studioList" className="text-white hover:text-green-500">
            Browse Studios
          </Link>
          <Link to="/studioList" className="text-white hover:text-green-500">
            About Us
          </Link>
          <Link to="/studioList" className="text-white hover:text-green-500">
            Contact Us
          </Link>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-black px-6 py-2 font-bold rounded-md hover:bg-green-500 hover:text-white"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-500 text-white px-6 py-2 font-bold rounded-md hover:bg-black"
          >
            Sign Up
          </button>
        </nav>
      </header>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="./src/assets/video/landing.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="h-screen flex flex-col items-center justify-center text-center text-white gap-y-3">
        <p className="text-7xl font-extrabold w-3/5">
          Moments Find Their Perfect Photographer Here!
        </p>
        <p className="text-xl mt-3 font-medium">Explore, Choose & Create</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 text-white text-xl shadow-md px-8 py-4 rounded-lg font-bold mt-6 hover:text-black hover:bg-white transition-colors duration-300"
        >
          Get Started
        </button>
      </div>

      <section className="relative h-full flex flex-col items-center justify-center mt-20 space-y-8">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 bg-white bg-opacity-90 p-6 rounded-md shadow-lg">
          <input
            className="px-4 py-2 rounded-md flex-1 bg-transparent border border-gray-300 text-black placeholder-gray-400"
            type="text"
            placeholder="What are you planning?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="border p-2 rounded w-36 bg-white text-black"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Where?</option>
            <option value="Upper East Region">Upper East Region</option>
            <option value="Upper West Region">Upper West Region</option>
            <option value="Northern Region">Northern Region</option>
            <option value="Eastern Region">Eastern Region</option>
            <option value="Western Region">Western Region</option>
            <option value="Greater Accra">Greater Accra</option>
          </select>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Select Date and Time"
            className="px-4 py-2 rounded-md bg-transparent border border-gray-300 text-black placeholder-gray-400"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-black px-4 py-2 rounded-md text-white"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-700">Loading studios...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            {filteredStudios.length > 0 ? (
              filteredStudios.map((studio) => (
                <div
                  key={studio.id}
                  className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-green-600">
                    {studio.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    Location: {studio.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Available on: {new Date(studio.availableDate).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">
                No studios found matching your criteria.
              </p>
            )}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
