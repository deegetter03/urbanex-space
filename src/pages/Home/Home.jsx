import { Parallax } from "../../components/atoms/Parallax/Parallax";
import { Navbar } from "../../components/atoms/Navbar/Navbar";
import { Cards } from "../../components/molecules/Cards/Cards";
import FirstParallaxImage from "../../assets/firstParallax/FirstParallax.webp";
import { Portfolio } from "../../components/organisms/Portfolio/Portfolio";
import { Contact } from "../../components/organisms/Contact/Contact";
import { AboutUs } from "../../components/molecules/AboutUs/AboutUs";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Services from "../../components/molecules/Services/Services";
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton";
import { Footer } from "../../components/molecules/Footer/Footer";
import Map from "../../components/molecules/Map/Map";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#home") {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-white m-0 p-0 overflow-hidden" id="home">
      {/* Wrap Home Component to apply blur when the menu is open */}
      <div className="transition-all duration-300">
        <Navbar />
        <Parallax image={FirstParallaxImage} description={"URBANEX SPACE"} />
        <div className="md:px-0 sm:px-0">
          <Cards />
          <Portfolio />
          <AboutUs />
          <Services />
          <Contact />
          <div className="w-full max-w-5xl px-4 mx-auto mb-10">
            <Map />
          </div>
          <Footer />
          <WhatsappButton />
        </div>
      </div>
    </div>
  );
};
