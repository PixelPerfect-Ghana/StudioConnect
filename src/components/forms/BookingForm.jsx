import React from "react";

const BookingForm = () => {
  // const [formData, setFormData] = useState ({
  // name:""
  // email:""
  // phone:""
  // date:""
  // time:""
  // venue:""
  // additionalRequest:""
  // });

  return (
    <div
      className="log-in flex flex-col justify-center items-center h-screen text-xs bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/images/studio2.jpg')" }}
    >
      <div className="max-w-sm w-full bg-transparent shadow-lg rounded-lg p-6 border border-black">
        <form className=" text-white shadow-md round px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Book a Studio</h2>
          <div className="flex gap-4">
            {/* name field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                required
              />

              {/* email field */}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                id="phone"
                required
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="studio"
                required
              />
            </div>

          </div>
          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="date"
                name="date"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="time"
                id="time"
                type="time"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="additionalRequests"
            >
              Additional Requests
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additionalRequests"
              name="additionalRequests"
              rows="3"
              placeholder="Any special requirements?"
            ></textarea>
          </div>

          {/*  Button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-green-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
