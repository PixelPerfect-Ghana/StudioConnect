import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { apiGetStudios, apiDeleteStudio } from "../../services/Studios";
import { toast } from "react-toastify";

const VendorStudios = () => {
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const fetchStudios = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await apiGetStudios(); // Replace with your API call
  //       setStudios(response.data);
  //     } catch (error) {
  //       toast.error("Failed to fetch studios.");
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  // };

  //   const handleDelete = async (studioId) => {
  //     if (window.confirm("Are you sure you want to delete this studio?")) {
  //       try {
  //         await apiDeleteStudio(studioId); // make API call
  //         toast.success("Studio deleted successfully!");
  //         fetchStudios(); // Refresh the list
  //       } catch (error) {
  //         toast.error("Failed to delete studio.");
  //         console.error(error);
  //       }
  //     }
  // };

  useEffect(() => {
    fetchStudios();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Studios</h1>
      {loading ? (
        <p>Loading studios...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studios.map((studio) => (
            <div key={studio.id} className="border p-4 rounded shadow">
              <h2 className="font-bold text-lg">{studio.title}</h2>
              <p>{studio.description}</p>
              <div className="mt-2 flex space-x-2">
                <Link to={`/edit-studio/${studio.id}`}>
                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(studio.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorStudios;
