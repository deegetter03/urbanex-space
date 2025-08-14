import { Parallax } from "../../atoms/Parallax/Parallax"
import Office from "../../../assets/categories/OfficeCover.webp"
import Residential from "../../../assets/categories/ResidentialCover.webp"
import Hospitality from "../../../assets/categories/HospitalityCover.webp"
import FarmhouseCover from "../../../assets/categories/FArmhouseCover.webp"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

//comment
export const Portfolio = () => {

    const location = useLocation();

    useEffect(() => {
        if(location.hash === "#portfolio") {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if(element) {
                const top = element.offsetTop - 125; // Adjust for navbar height
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    }, [location])
    return (
        <div id="portfolio">
            <h1
                className="text-5xl font-semibold text-center mt-10 mb-10 text-gray-800"
            >
                Portfolio
            </h1>

            <Parallax image={Residential} description={'Residential Designs'} />
            <div className="w-full mt-10 mb-10 px-4 flex justify-center">
                <div className="w-full max-w-2xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                    Designed for Modern Living, Styled for Timeless Grace.
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-light text-black leading-relaxed">
                    Our Residential Designs are tailored to urban lifestyles that demand both style and substance.
                    Each project is a study in balance — blending bold design statements with serene palettes,
                    smart space planning with luxurious comfort. We focus on making every corner count, from 
                    multi-functional layouts to mood-enhancing lighting and curated finishes.
                    </p>
                    <Link
                        to="/portfolio/residential"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-8 inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 text-white font-semibold shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-105"
                        >
                        See More
                    </Link>
                </div>
            </div>

            <Parallax image={Office} description={'Office Designs'} />
            <div className="w-full mt-10 mb-10 px-4 flex justify-center">
                <div className="w-full max-w-2xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                    Smart & Stylish Workspaces That Energize Performance.
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-light text-black leading-relaxed">
                    We believe a well-designed office is a catalyst for productivity and inspiration. Our approach to office interiors combines brand identity with employee experience using layout, lighting, color psychology, and material choices to create dynamic environments.
                    From sleek corporate setups to creative studios, our designs support modern workflows while exuding professionalism and innovation.
                    </p>
                    <Link
                        to="/portfolio/office"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-8 inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 text-white font-semibold shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-105"
                        >
                        See More
                    </Link>
                </div>
            </div>

            <Parallax image={Hospitality} description={'Hospitality Designs'} />
            <div className="w-full mt-10 mb-10 px-4 flex justify-center">
                <div className="w-full max-w-2xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                    Immersive Luxury Designed to Leave a Lasting Impression.
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-light text-black leading-relaxed">
                    Our hospitality interiors blend elegance, warmth, and cultural nuance to create unforgettable guest experiences.
                    Whether designing boutique hotels or expansive resorts, we focus on spatial storytelling where every lobby, room,
                    and lounge evokes comfort, opulence, and distinct identity. Rich materials, ambient lighting, and regionally
                    inspired accents come together to build immersive environments that delight guests and elevate your brand’s
                    hospitality offering.
                    </p>
                    <Link
                        to="/portfolio/hospitality"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-8 inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 text-white font-semibold shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-105"
                        >
                        See More
                    </Link>
                </div>
            </div>

            <Parallax image={FarmhouseCover} description={'Farmhouse Designs'} />
            <div className="w-full mt-10 mb-10 px-4 flex justify-center">
                <div className="w-full max-w-2xl text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                    Where Nature Embraces Luxury, Effortlessly.
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-light text-black leading-relaxed">
                        Our farmhouse designs are rooted in simplicity, grounded in nature, and elevated by elegance. We craft interiors that breathe with airy layouts, raw materials, and cozy textures that reflect the surrounding landscape. Whether it's a weekend escape or a full-time retreat, our farmhouse spaces offer a perfect blend of tranquility and sophistication, where comfort feels organic and style feels effortless.
                    </p>
                    <Link
                        to="/portfolio/farmhouse"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-8 inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 text-white font-semibold shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-105"
                        >
                        See More
                    </Link>
                </div>
            </div>
        </div>
    )
}