
// StudioDetails.js
import React from "react";
import { useParams } from "react-router-dom";

// Sample data for testing
const sampleStudios = [
  {
    id: 1,
    name: "Studio One",
    location: "Greater Accra",
    description: "A creative space for all your photography needs.",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg", "/path/to/image3.jpg"],
  },
  {
    id: 2,
    name: "Creative Shots",
    location: "Eastern Region",
    description: "A modern studio with all the latest equipment.",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg", "/path/to/image3.jpg"],
  },
  // Add more sample studio data as needed
];

const StudioDetails = () => {
  const { studioId } = useParams();
  const studio = sampleStudios.find((studio) => studio.id === parseInt(studioId));

  if (!studio) return <p>Studio not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{studio.name}</h1>
      <p className="text-lg">{studio.location}</p>
      <p>{studio.description}</p>
      <div className="flex space-x-4 mt-4">
        {studio.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-1/3 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default StudioDetails;

