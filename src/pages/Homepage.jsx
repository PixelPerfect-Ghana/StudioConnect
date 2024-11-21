import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-6 bg-black shadow-md">
        <div className="text-2xl font-bold text-white">PixelPerfect</div>
        <nav className="flex items-center space-x-6">
          <Link to="/StudioList" className="text-white hover:text-green-600">Browse Studios</Link>
          <Link to="/LandingPage" className="text-white hover:text-green-600">
            Get Started
          </Link>
        </nav>
      </header>

      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('./src/assets/images/landingpage.jpg')",
        }}
      >
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-2">
          <p className="text-3xl font-extrabold typewriter">Moments Find Their Perfect Photographer Here!</p>
          <p className="text-2xl mt-2 font-bold typewriter">Explore, Choose & Create</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
