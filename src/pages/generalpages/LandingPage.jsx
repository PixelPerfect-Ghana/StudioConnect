import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [startDate, setStartDate] = useState(null);


  return (
    <div>
      <header className="flex items-center justify-between p-6 bg-black shadow-md">
        <div className="text-2xl font-bold text-white">PixelPerfect</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-green-600">Browse Studios</a>
          <Link to="/LoginForm"><a href="#" className="text-white hover:text-green-600">Log In</a></Link>
          <Link to="/SignupForm"> <a href="#" className="text-white hover:text-green-600">Sign Up</a></Link>
        </nav>
      </header>

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 bg-black p-4 rounded-md">
          <input
            className="px-4 py-2 rounded-md flex-1 bg-transparent border border-gray-300 text-white placeholder-gray-400"
            type="text"
            placeholder="What are you planning?"
          />
          <select className="border p-2 rounded w-36">
            <option>Where?</option>
            <option value="">Upper East Region</option>
            <option value="">Upper West Region</option>
            <option value="">Northern Region</option>
            <option value="">Eastern Region</option>
            <option value="">Brong-Ahafo Region</option>
            <option value="">Central Region</option>
            <option value="">Ashanti Region</option>
            <option value="">Volta Region</option>
            <option value="">WesternRegion</option>
            <option value="">Greater Accra</option>

        </select>
          <div className="flex ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select Date and Time"
              className="px-4 py-2 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400"
            />
          </div>
          <button className="bg-black hover:bg-green-600 px-4 py-2 rounded-md text-white">
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;