import React from "react";
import { Link } from "react-router-dom";
import StudiosAdv from "./StudiosAdv";

// Mock data for studios
const studios = [
  {
    id: 1,
    name: "Studio One",
    location: "Greater Accra",
    description: "A modern studio with all facilities.",
    image: "studio1.jpg",
  },
  {
    id: 2,
    name: "Creative Shots",
    location: "Eastern Region",
    description: "Perfect for portrait photography.",
    image: "studio2.jpg",
  },
  {
    id: 3,
    name: "Snap Studio",
    location: "Ashanti Region",
    description: "Ideal for commercial shoots.",
    image: "studio3.jpg",
  },
  {
    id: 4,
    name: "Pixel Studio",
    location: "Northern Region",
    description: "Equipped for all kinds of shoots.",
    image: "studio4.jpg",
  },
  {
    id: 5,
    name: "Light House",
    location: "Western Region",
    description: "Known for its scenic setup.",
    image: "studio5.jpg",
  },
];

const StudiosListPage = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-8 ">
        <h1 className="text-3xl font-semibold text-center mb-6">Our Studios</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studios.map((studio) => (
            <StudiosAdv
              id={studio.id}
              key={studio.id}
              image={studio.image}
              StudioName={studio.name}
              location={studio.location}
              description={studio.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudiosListPage;
