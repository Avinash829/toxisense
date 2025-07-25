import vignanlogo from '../assets/vignan-removebg-preview.png';
import cselogo from '../assets/cselogo-removebg-preview.png';

export default function Navbar() {
  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md nav-top sticky top-0 z-50">

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={vignanlogo} alt="College Logo" className="h-12" />
          </div>

          <div className="flex space-x-8 bt-nav">
            <a href="#home" className="text-white-700 hover:text-white-900 link1">Home</a>
            <a href="#about" className="text-white-700 hover:text-white-900 link1">About Us</a>
            <a href="#contact" className="text-white-700 hover:text-white-900 link1">Contact Us</a>
          </div>

          <div className="flex-shrink-0">
            <img src={cselogo} alt="CSE Logo" className="h-12" />
          </div>
        </div>
      </div>
    </nav>
  );
}
