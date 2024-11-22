import { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      clientName: "John Doe",
      date: "2024-03-20",
      time: "14:00-16:00",
      Location: "upper east region",
      status: "pending",
      price: 150,
    },
    {
      id: 2,
      clientName: "Jane Smith",
      date: "2024-03-21",
      time: "10:00-13:00",
      Location: "western region",
      status: "pending",
      price: 200,
    },
  ]);

  const handleBookingAction = (bookingId, action) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: action } : booking
      )
    );
    console.log(`Booking ${bookingId} ${action}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "text-green-700 bg-green-100 border border-green-300";
      case "declined":
        return "text-red-700 bg-red-100 border border-red-300";
      default:
        return "text-yellow-700 bg-yellow-100 border border-yellow-300";
    }
  };

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Booking Requests</h1>
        <p className="text-gray-600">
          Manage your studio booking requests efficiently
        </p>
      </header>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {booking.clientName}
                </h2>
                <div className="mt-2 text-gray-600 text-sm space-y-1">
                  <p>
                    <span className="font-medium text-gray-800">Date:</span>{" "}
                    {booking.date}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">Time:</span>{" "}
                    {booking.time}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">location:</span>{" "}
                    {booking.Location}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">Price:</span> $
                    {booking.price}
                  </p>
                  
                </div>
              </div>

              <div className="mt-1">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    booking.status
                  )}`}
                >
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
            </div>

            {booking.status === "pending" && (
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleBookingAction(booking.id, "accepted")}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-sm"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleBookingAction(booking.id, "declined")}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-sm"
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}

        {bookings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No booking requests available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
