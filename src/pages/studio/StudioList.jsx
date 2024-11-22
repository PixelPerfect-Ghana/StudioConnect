import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudiosAdv from "./StudiosAdv";
import PagesLayout from "../../layout/PagesLayout";
import { apiGetAllStudios } from "../../services/studios";

// Mock data for studios
// const studios = [
//   {
//     id: 1,
//     name: "Studio One",
//     location: "Greater Accra",
//     description: "A modern studio with all facilities.",
//     image: "studio1.jpg",
//   },
//   {
//     id: 2,
//     name: "Creative Shots",
//     location: "Eastern Region",
//     description: "Perfect for portrait photography.",
//     image: "studio2.jpg",
//   },
//   {
//     id: 3,
//     name: "Snap Studio",
//     location: "Ashanti Region",
//     description: "Ideal for commercial shoots.",
//     image: "studio3.jpg",
//   },
//   {
//     id: 4,
//     name: "Pixel Studio",
//     location: "Northern Region",
//     description: "Equipped for all kinds of shoots.",
//     image: "studio4.jpg",
//   },
//   {
//     id: 5,
//     name: "Light House",
//     location: "Western Region",
//     description: "Known for its scenic setup.",
//     image: "studio5.jpg",
//   },
// ];

const StudiosListPage = () => {
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudios = async () => {
    setLoading(true);
    try {
      const response = await apiGetAllStudios();
      setStudios(response.data);
    } catch (error) {
      console.error("Error creating studio", error);
      toast.error("Failed to fetch studio profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudios();
  }, []);
  return (
    <PagesLayout text="Our Studios" loading={loading}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {studios?.length > 0 &&
          studios?.map((studio) => (
            <StudiosAdv
              id={studio.id}
              key={studio.id}
              image={studio.icon}
              StudioName={studio.name}
              location={studio.location}
              description={studio.description}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default StudiosListPage;
