import { Navbar } from "../../components/atoms/Navbar/Navbar";
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage";
import farmhouse11 from "../../assets/portfolio/farmhouse/farmhouse11.webp";
import farmhouse12 from "../../assets/portfolio/farmhouse/farmhouse12.webp";
import farmhouse13 from "../../assets/portfolio/farmhouse/farmhouse13.webp";
import farmhouse14 from "../../assets/portfolio/farmhouse/farmhouse14.webp";
import FarmhouseSlide11 from "../../assets/portfolio/farmhouse/FarmhouseSlide11.webp";
import FarmhouseSlide12 from "../../assets/portfolio/farmhouse/FarmhouseSlide12.webp";
import FarmhouseSlide13 from "../../assets/portfolio/farmhouse/FarmhouseSlide13.webp";
import FarmhouseSlide14 from "../../assets/portfolio/farmhouse/FarmhouseSlide14.webp";
import FarmhouseSlide15 from "../../assets/portfolio/farmhouse/FarmhouseSlide15.webp";
import FarmhouseSlide16 from "../../assets/portfolio/farmhouse/FarmhouseSlide16.webp";
import FarmhouseSlide17 from "../../assets/portfolio/farmhouse/FarmhouseSlide17.webp";
import FarmhouseSlide18 from "../../assets/portfolio/farmhouse/FarmhouseSlide18.webp";
import FarmhouseSlide19 from "../../assets/portfolio/farmhouse/FarmhouseSlide19.webp";
import FarmhouseSlide20 from "../../assets/portfolio/farmhouse/FarmhouseSlide20.webp";
import FarmhouseSlide21 from "../../assets/portfolio/farmhouse/FarmhouseSlide21.webp";
import FarmhouseSlide22 from "../../assets/portfolio/farmhouse/FarmhouseSlide22.webp";
import FarmhouseSlide23 from "../../assets/portfolio/farmhouse/FarmhouseSlide23.webp";
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton";
import { Footer } from "../../components/molecules/Footer/Footer";

export const FarmhousePortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 mt-36">
                    Our Farmhouse Projects
                </h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
                    Where Rustic Charm Meets Refined Comfort
                </h2>
                <p className="text-sm sm:text-base text-center mb-8">
                    Our farmhouse interiors embrace nature-inspired design, blending earthy tones, organic textures, and open layouts to create serene sanctuaries away from the city’s chaos. Every space is a thoughtful combination of rustic elegance and modern comfort from wooden beams and stone finishes to curated vintage accents. We design warm, inviting homes that breathe with natural light and reflect the spirit of relaxed, countryside living with a contemporary twist.
                </p>
                <hr className="border-t-1.5 border-gray-300 mb-8" />

                <PortfolioPage
                    cards={[
                        { image: farmhouse11 },
                        { image: farmhouse12 },
                        { image: farmhouse13 },
                        { image: farmhouse14 },
                    ]}
                    images={[
                        { image: FarmhouseSlide11 },
                        { image: FarmhouseSlide12 },
                        { image: FarmhouseSlide13 },
                        { image: FarmhouseSlide14 },
                        { image: FarmhouseSlide15 },
                        { image: FarmhouseSlide16 },
                        { image: FarmhouseSlide17 },
                        { image: FarmhouseSlide18 },
                        { image: FarmhouseSlide19 },
                        { image: FarmhouseSlide20 },
                        { image: FarmhouseSlide21 },
                        { image: FarmhouseSlide22 },
                        { image: FarmhouseSlide23 },
                    ]}
                />
            </div>
            <Footer />
            <WhatsappButton />
        </div>
    );
};
