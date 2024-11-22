import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { apiGetStudioById } from "../../services/studios";
import PagesLayout from "../../layout/PagesLayout";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const StudioDetails = () => {
  const { id } = useParams();
  const [studio, setStudio] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudio = async () => {
    setLoading(true);
    try {
      const response = await apiGetStudioById(id);
      setStudio(response.data);
    } catch (error) {
      console.error("Error fetching studio details", error);
      toast.error("Failed to fetch studio details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudio();
  }, []);

  return (
    <PagesLayout loading={loading}>
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-4 w-full">
          <img
            src={studio?.icon}
            alt={`${studio?.name} icon`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">{studio?.name}</h1>
        </div>

        {/* Overview */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-gray-700">{studio?.description}</p>
          <p className="flex items-center mt-2 text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            {studio?.location}
          </p>
          <p className="flex items-center mt-2 text-gray-600">
            <span className="text-green-600 font-semibold mr-2">Price:</span>GHS
            {studio?.price} / session
          </p>
        </div>

        {/* Gallery */}
        {studio?.images?.length > 0 && (
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {studio?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Contact Details */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <p className="flex items-center text-gray-600">
            <FaPhone className="mr-2" />
            {studio?.phone}
          </p>
          <p className="flex items-center mt-2 text-gray-600">
            <FaEnvelope className="mr-2" />
            {studio?.email}
          </p>
          {studio?.website && (
            <p className="flex items-center mt-2 text-gray-600">
              <FaGlobe className="mr-2" />
              <a
                href={studio?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {studio?.website}
              </a>
            </p>
          )}
        </div>

        {/* Socials */}
        {studio?.socials && (
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
              {studio?.socials?.facebook && (
                <a
                  href={studio.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook size={24} />
                </a>
              )}
              {studio?.socials?.twitter && (
                <a
                  href={studio.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {studio?.socials?.instagram && (
                <a
                  href={studio.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={24} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Payment Methods */}
        {studio?.paymentMethods?.length > 0 && (
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
            <ul className="list-disc list-inside">
              {studio?.paymentMethods.map((method, index) => (
                <li key={index} className="text-gray-600">
                  {method}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Book Now Button */}
        <div className="text-center">
          <Link to="/bookings">
            <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 transition-colors">
              Book Us
            </button>
          </Link>
        </div>
      </div>
    </PagesLayout>
  );
};

export default StudioDetails;
