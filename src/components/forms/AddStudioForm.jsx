import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCreateStudio } from "../../services/studios";
import PagesLayout from "../../layout/PagesLayout";

const AddStudioForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      const response = await apiCreateStudio(formData);
      console.log(response.data);
      toast.success("Studio added successfully!");
      localStorage.setItem("role", "vendor");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating studio", error);
      toast.error("Failed to add studio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PagesLayout text="Add Your Studio">
      <div className="w-3/5  flex items-center ">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6">
          <div>
            <label className="block text-sm font-semibold  mb-1">
              Studio Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
              placeholder="Enter studio name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">
              Price (per hour)
            </label>
            <input
              type="number"
              name="price"
              required
              className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
              placeholder="Enter price"
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">
              Location
            </label>
            <select
              name="location"
              className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
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
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              className="w-full p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
              placeholder="Describe your studio"
              rows="4"
            ></textarea>
          </div>

          <div className="flex gap-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold  mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                required
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                placeholder="Enter phone number"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold  mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                placeholder="Enter contact email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="icon"
              accept="image/*"
              className="w-full p-2 h-12 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500  p-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Adding Studio..." : "Add Studio"}
          </button>
        </form>
      </div>
    </PagesLayout>
  );
};

export default AddStudioForm;
