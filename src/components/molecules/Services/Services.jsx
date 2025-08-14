import { useEffect } from 'react';
import { FaPaintRoller } from 'react-icons/fa6';
import { GiFloorPolisher, GiSaloonDoors } from 'react-icons/gi';
import {
  MdKitchen,
  MdOutlineBedroomChild,
  MdOutlineLightbulb,
  MdOutlineWallpaper,
  MdOutlineTableBar,
  MdOutlineBathroom,
  MdOutlineLiveTv,
  MdOutlineStorage,
  MdOutlineChair,
  MdOutlineRoofing,
  MdOutlineRoomPreferences,
  MdHomeRepairService
} from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const services = [
  { title: "Turnkey Solutions", icon: <MdHomeRepairService size={40} /> },
  { title: "Modular Kitchen", icon: <MdKitchen size={40} /> },
  { title: "Storage and Wardrobe", icon: <MdOutlineStorage size={40} /> },
  { title: "Space Saving Furniture", icon: <MdOutlineChair size={40} /> },
  { title: "TV Units", icon: <MdOutlineLiveTv size={40} /> },
  { title: "Wall Paint", icon: <FaPaintRoller size={40} /> },
  { title: "False Ceiling", icon: <MdOutlineRoofing size={40} /> },
  { title: "Lights", icon: <MdOutlineLightbulb size={40} /> },
  { title: "Wallpaper", icon: <MdOutlineWallpaper size={40} /> },
  { title: "Bathroom", icon: <MdOutlineBathroom size={40} /> },
  { title: "Pooja Unit", icon: <MdOutlineRoomPreferences size={40} /> },
  { title: "Kids Bedroom", icon: <MdOutlineBedroomChild size={40} /> },
  { title: "Glass Work and Design", icon: <MdOutlineTableBar size={40} /> },
  { title: "Foyer Designing", icon: <GiSaloonDoors size={40} /> },
  { title: "Marble Flooring", icon: <GiFloorPolisher size={40} /> },
];

export default function Services() {
  function handleClick() {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      const id = location.hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop - 80; // Adjust for navbar height
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section className="py-10 bg-white" id='services'>
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mt-5 mb-10 text-gray-800">
        Services
      </h1>
      <h2 className="text-xl sm:text-3xl text-center mb-6 text-gray-600">
        End to End Interior Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-red-500 mb-4">{service.icon}</div>
            <div className="mt-3 text-base sm:text-lg font-medium text-gray-700">{service.title}</div>
          </div>
        ))}
      </div>
      <button 
        className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition align-center block mx-auto"
        onClick={handleClick}
      >
        Book a Free Design Session
      </button>
    </section>
  );
}
