import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  apiGetUserStudio,
  apiUpdateStudioDetails,
} from "../../services/studios";
import PagesLayout from "../../layout/PagesLayout";

const ManageStudio = () => {
  const { id } = useParams(); // Studio ID from the URL
  const navigate = useNavigate();

  const [studio, setStudio] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    location: "",
    phone: "",
    email: "",
    website: "",
    socials: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
    paymentMethods: [], // Array for payment options
    icon: null, // File for FormData
    iconPreview: null, // Icon preview URL
    images: [], // Files for FormData
    imagePreviews: [], // Previews for images
  });
  const [loading, setLoading] = useState(false);

  const fetchStudio = async () => {
    setLoading(true);
    try {
      const response = await apiGetUserStudio();
      const studioData = response.data[0];

      setStudio({
        ...studioData,
        socials: studioData.socials || {
          facebook: "",
          twitter: "",
          instagram: "",
        },
        icon: null,
        iconPreview: studioData.icon,
        images: [],
        imagePreviews: studioData.images || [],
      });
    } catch (error) {
      console.error("Error fetching studio details", error);
      toast.error("Failed to fetch studio details.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudio((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setStudio((prev) => ({
      ...prev,
      socials: { ...prev.socials, [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudio((prev) => ({
        ...prev,
        icon: file,
        iconPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleMultipleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setStudio((prev) => ({
      ...prev,
      images: files,
      imagePreviews: [...prev.imagePreviews, ...filePreviews],
    }));
  };

  const handleRemoveImagePreview = (index) => {
    setStudio((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
      imagePreviews: prev.imagePreviews.filter((_, i) => i !== index),
    }));
  };

  const handlePaymentMethodChange = (e) => {
    const { value, checked } = e.target;
    setStudio((prev) => ({
      ...prev,
      paymentMethods: checked
        ? [...prev.paymentMethods, value]
        : prev.paymentMethods.filter((method) => method !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", studio.name);
    formData.append("description", studio.description);
    formData.append("price", studio.price);
    formData.append("category", studio.category);
    formData.append("location", studio.location);
    formData.append("phone", studio.phone);
    formData.append("email", studio.email);
    formData.append("website", studio.website);
    formData.append("icon", studio.icon);
    studio.images.forEach((image, index) =>
      formData.append(`images[${index}]`, image)
    );

    // Socials
    Object.entries(studio.socials).forEach(([key, value]) =>
      formData.append(`socials[${key}]`, value)
    );

    // Payment Methods
    studio.paymentMethods.forEach((method) =>
      formData.append("paymentMethods[]", method)
    );

    try {
      await apiUpdateStudioDetails(id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Studio updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating studio", error);
      toast.error("Failed to update studio details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudio();
  }, []);
  return (
    <PagesLayout loading={loading} text={"Manage Studio"}>
      <div className="max-w-7xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          {/* General Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Studio Name</label>
              <input
                type="text"
                name="name"
                value={studio.name}
                onChange={handleInputChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Icon</label>
              <input
                type="file"
                name="icon"
                onChange={handleFileChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
              />
              {studio.iconPreview && (
                <img
                  src={studio.iconPreview}
                  alt="Icon Preview"
                  className="mt-2 w-16 h-16 object-cover rounded-md"
                />
              )}
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-semibold">Description</label>
              <textarea
                name="description"
                value={studio.description}
                onChange={handleInputChange}
                className="w-full  p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold">Price</label>
              <input
                type="number"
                name="price"
                value={studio.price}
                onChange={handleInputChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={studio.location}
                onChange={handleInputChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-xl font-semibold mt-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                value={studio.phone}
                onChange={handleInputChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={studio.email}
                onChange={handleInputChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                required
              />
            </div>
          </div>

          {/* Social Links */}
          <h2 className="font-semibold text-xl mt-4">Social Links</h2>
          {["facebook", "twitter", "instagram"].map((platform) => (
            <div key={platform}>
              <label className="block font-semibold capitalize">
                {platform}
              </label>
              <input
                type="url"
                name={platform}
                value={studio?.socials && studio?.socials[platform]}
                onChange={handleSocialChange}
                className="w-full h-12 p-2 border border-green-500 rounded-md focus:outline-none focus:border-2 focus:border-green-700"
                placeholder={`Enter ${platform} link`}
              />
              {studio.socials[platform] && (
                <a
                  href={studio.socials[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm mt-1 block"
                >
                  Preview {platform} Link
                </a>
              )}
            </div>
          ))}

          {/* Images */}
          <h2 className="font-semibold text-xl mt-4">Images</h2>
          <input
            type="file"
            multiple
            onChange={handleMultipleFileChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {studio.imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="w-full h-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImagePreview(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {/* Payment Methods */}
          <h2 className="font-semibold text-xl mt-4">Payment Methods</h2>
          {["Cash", "Mobile Money", "Bank Transfer"].map((method) => (
            <label key={method} className="block">
              <input
                type="checkbox"
                value={method}
                checked={studio.paymentMethods.includes(method)}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              {method}
            </label>
          ))}
          <button
            type="submit"
            className="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </PagesLayout>
  );
};

export default ManageStudio;
