import { Link } from "react-router-dom";

const Homepage =() =>{
  return (
    <div>
        
     <header className="flex items-center justify-between p-6 bg-black shadow-md">
        <div className="text-2xl font-bold text-white">PixelPerfect</div>
     <nav className="flex items-center space-x-6">
        <Link to="/StudioAdv"><a href="#" className="text-white hover:text-green-600">Browse Studios</a></Link>
        <Link to="/LandingPage"><a href="#" className="text-white hover:text-green-600">Get Started</a></Link>
    </nav>
    </header>
    
    <div>
       <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('./assets/images/homepage')" }}></div>

      {/* Overlay-text */}
      <div className="text-red-800">
      <p> Discover and Book exceptional photo studios</p>
      <p>Capture your best moments!!</p>

 </div>
 </div>

    </div>

  )
}

export default Homepage