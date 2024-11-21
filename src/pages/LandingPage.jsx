import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Mock data for studios
const studios = [
  {
    id: 1,
    name: "Studio One",
    location: "Greater Accra",
    availableDate: new Date("2024-11-25T10:00:00"),
  },
  {
    id: 2,
    name: "Creative Shots",
    location: "Eastern Region",
    availableDate: new Date("2024-11-26T12:00:00"),
  },
  {
    id: 3,
    name: "Snap Studio",
    location: "Ashanti Region",
    availableDate: new Date("2024-11-20T14:00:00"),
  },
  {
    id: 4,
    name: "Pixel Studio",
    location: "Northern Region",
    availableDate: new Date("2024-11-27T09:00:00"),
  },
  {
    id: 5,
    name: "Light House",
    location: "Western Region",
    availableDate: new Date("2024-11-21T16:00:00"),
  },
];

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredStudios, setFilteredStudios] = useState(studios);

  const handleSearch = () => {
    const results = studios.filter((studio) => {
      const matchesQuery = query
        ? studio.name.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesLocation = location ? studio.location === location : true;
      const matchesDate = startDate
        ? studio.availableDate.toDateString() === startDate.toDateString()
        : true;
      return matchesQuery && matchesLocation && matchesDate;
    });
    setFilteredStudios(results);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-black bg-opacity-50 z-50">
        <div className="text-2xl font-bold text-white">PixelPerfect</div>
        <nav className="flex items-center space-x-6">
          <Link to="/studioList">
            <a href="#" className="text-white hover:text-green-600">
              Browse Studios
            </a>
          </Link>
          <Link to="/login">
            <span className="text-white hover:text-green-600">Log In</span>
          </Link>
          <Link to="/signup" className="text-white hover:text-green-600">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="./src/assets/video/landing.mp4"
        autoPlay
        loop
        muted
      ></video>

      <section className="relative h-full flex flex-col items-center justify-center mt-40 space-y-8">
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
            <option value="Brong-Ahafo Region">Brong-Ahafo Region</option>
            <option value="Central Region">Central Region</option>
            <option value="Ashanti Region">Ashanti Region</option>
            <option value="Volta Region">Volta Region</option>
            <option value="Western Region">Western Region</option>
            <option value="Greater Accra">Greater Accra</option>
          </select>
          <div className="flex">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select Date and Time"
              className="px-4 py-2 rounded-md bg-transparent border border-gray-300 text-black placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-black px-4 py-2 rounded-md text-white"
          >
            Search
          </button>
        </div>

        <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          {filteredStudios.length > 0 ? (
            filteredStudios.map((studio) => (
              <div key={studio.id} className="border-b border-gray-300 py-2">
                <h3 className="text-lg font-semibold">{studio.name}</h3>
                <p>Location: {studio.location}</p>
                <p>Available on: {studio.availableDate.toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">
              No studios found matching your criteria.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
