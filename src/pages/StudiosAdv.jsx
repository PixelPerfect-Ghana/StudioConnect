import { Link } from "react-router-dom";



const StudioAdv = ({ image, StudioName, location, description }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={image} 
        alt={StudioName}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{StudioName}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{description}</p>
        <Link to = "/singlestudio"><button className="mt-4 w-full bg-green-500 text-white text-sm font-semibold p-2 rounded-md hover:bg-green-600 transition-colors">
          View Details
        </button></Link>
      </div>
    </div>
  );
};

export default StudioAdv;
