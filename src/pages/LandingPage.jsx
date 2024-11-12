import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Header on top of the video */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-black bg-opacity-50 z-10">
        <div className="text-2xl font-bold text-white">PixelPerfect</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-green-600">Browse Studios</a>
          <Link to="/LoginForm" className="text-white hover:text-green-600">Log In</Link>
          <Link to="/SignupForm" className="text-white hover:text-green-600">Sign Up</Link>
        </nav>
      </header>
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="./src/assets/video/landingvideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Centered Search Section */}
      <section className="relative h-full flex items-center justify-center z-10">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 bg-white bg-opacity-90 p-6 rounded-md shadow-lg">
          <input
            className="px-4 py-2 rounded-md flex-1 bg-transparent border border-gray-300 text-black placeholder-gray-400"
            type="text"
            placeholder="What are you planning?"
          />
          <select className="border p-2 rounded w-36 bg-white text-black">
            <option>Where?</option>
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
          <button className="bg-green-600 hover:bg-black px-4 py-2 rounded-md text-white">
            Search
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
