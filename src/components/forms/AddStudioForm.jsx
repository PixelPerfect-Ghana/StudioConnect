import React, { useState } from "react";
import { apiCreateStudio } from "../../services/Studios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const AddStudioForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // try {
    //   setLoading(true);
    //   const response = await apiCreateStudio(formData);
    //   console.log(response.data);
    //   toast.success("Studio added successfully!"); 
    //   navigate("/studioList");
    // } catch (error) {
    //   console.error("Error creating studio", error);
    //   toast.error("Failed to add studio. Please try again."); 
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div
      className="log-in flex flex-col justify-center items-center h-screen text-xs bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/images/studio2.jpg')" }}
    >
      <div className="max-w-sm w-full bg-transparent shadow-lg rounded-lg p-6 border border-black">
        <h2 className="text-2xl font-bold text-white mb-6">Add Your Studio</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">
              Studio Name
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter studio name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">
              Price (per hour)
            </label>
            <input
              type="number"
              name="price"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter price"
              min="0"
              step="0.01"
            />
          </div>

          <select
            name="location"
            className="border p-2 rounded w-36 text-gray-400 mb-4"
            required
          >
            <option value="">Location</option>
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

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Describe your studio"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter contact email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Adding Studio..." : "Add Studio"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudioForm;
