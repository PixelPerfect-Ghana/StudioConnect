import React, { useState } from 'react';

const AddStudioForm = ({ onSubmit }) => {
  const [studioData, setStudioData] = useState({
    name: '',
    location: '',
    description: '',
    contactEmail: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudioData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setStudioData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(studioData);
    }
    // Clear form after submission
    setStudioData({ name: '', location: '', description: '', contactEmail: '', image: null });
  };

  return (
    <div className="log-in flex flex-col justify-center items-center h-screen text-xs bg-cover bg-center" 
        style={{ backgroundImage: "url('./src/assets/images/studio2.jpg')" }}>   
         <div className="max-w-sm w-full bg-transparent shadow-lg rounded-lg p-6 border border-black">
      <h2 className="text-2xl font-bold text-white mb-6">Add Your Studio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-1">Studio Name</label>
          <input
            type="text"
            name="name"
            value={studioData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter studio name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={studioData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-1">Description</label>
          <textarea
            name="description"
            value={studioData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Describe your studio"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-1">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={studioData.contactEmail}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter contact email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-1">Upload Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Add Studio
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddStudioForm;