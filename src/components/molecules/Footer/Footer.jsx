import logo from '../../../../public/favicon.webp';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between shadow-md">
      
      {/* Left: Copyright */}
      <div className="text-sm lg:ml-36 mb-4 md:mb-0 text-center md:ml-32 md:text-left">
        © {new Date().getFullYear()} <span className="font-semibold">URBANEX SPACE</span>
      </div>

      {/* Center: Logo & Tagline */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <img
          src={logo} // Replace with your white logo path
          alt="Logo"
          className="h-16 mb-2"
        />
        <div className="text-xs text-center">
          <span className="font-bold">TRANSFORM YOUR INTERIOR</span>
        </div>
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex space-x-4 lg:mr-36 text-white text-xl justify-center md:mr-32">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-pink-500 hover:text-gray-400" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-blue-600 hover:text-gray-400" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-red-600 hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};
