import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  apiGetStudioById,
  apiUpdateStudioDetails,
} from "../../services/studios";

const UpdateStudioForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [studio, setStudio] = useState({});
  const [image, setImage] = useState(null); // State to handle the image
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudioDetails = async () => {
      try {
        const response = await apiGetStudioById(id); // Fetch studio details by ID
        setStudio(response.data);
      } catch (error) {
        toast.error("Failed to fetch studio details.");
        console.error(error);
      }
    };

    fetchStudioDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", studio.title);
      if (image) {
        formData.append("image", image); // Include the new image if uploaded
      }

      await apiUpdateStudioDetails(id, formData); // Send the FormData to the API
      toast.success("Studio updated successfully!");
      navigate("/vendor-studios");
    } catch (error) {
      toast.error("Failed to update studio.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudio({ ...studio, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Update image state when a new file is selected
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Studio</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Studio Name</label>
          <input
            type="text"
            name="title"
            value={studio.title || ""}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={studio.description || ""}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          ></textarea>
        </div> */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Current Image</label>
          {studio.image && (
            <img
              src={studio.image} // Assuming the backend returns an image URL
              alt="Current Studio"
              className="w-full h-32 object-cover rounded mb-2"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Upload New Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Studio"}
        </button>
      </form>
    </div>
  );
};

export default UpdateStudioForm;
