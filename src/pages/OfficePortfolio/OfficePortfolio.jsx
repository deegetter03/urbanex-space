import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import office11 from "../../assets/portfolio/office/office11.webp"
import office12 from "../../assets/portfolio/office/office12.webp"
import office21 from "../../assets/portfolio/office/office21.webp"
import office22 from "../../assets/portfolio/office/office22.webp"
import OfficeSlide11 from "../../assets/portfolio/office/OfficeSlide11.webp"
import OfficeSlide12 from "../../assets/portfolio/office/OfficeSlide12.webp"
import OfficeSlide13 from "../../assets/portfolio/office/OfficeSlide13.webp"
import OfficeSlide14 from "../../assets/portfolio/office/OfficeSlide14.webp"
import OfficeSlide15 from "../../assets/portfolio/office/OfficeSlide15.webp"
import OfficeSlide21 from "../../assets/portfolio/office/OfficeSlide21.webp"
import OfficeSlide22 from "../../assets/portfolio/office/OfficeSlide22.webp"
import OfficeSlide23 from "../../assets/portfolio/office/OfficeSlide23.webp"
import OfficeSlide24 from "../../assets/portfolio/office/OfficeSlide24.webp"
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton"
import { Footer } from "../../components/molecules/Footer/Footer"

export const OfficePortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 mt-36">
                    Our Office Projects
                </h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
                    Designing Workspaces That Work Beautifully
                </h2>
                <p className="text-base sm:text-lg text-center mb-8 max-w-3xl mx-auto">
                    We create inspiring office environments that foster productivity, creativity, and wellbeing. Our office designs focus on clean, functional layouts enhanced by modern aesthetics and ergonomic principles. From sleek meeting rooms and collaborative zones to quiet workstations and stylish break areas, every detail is curated to reflect your brand ethos while maximizing efficiency and comfort. The result is a space where form and function align seamlessly.
                </p>
                <hr className="border-t-1.5 border-gray-300 mb-8" />

                <PortfolioPage
                    cards={[
                        { image: office11 },
                        { image: office12 },
                        { image: office21 },
                        { image: office22 },
                    ]}
                    images={[
                        { image: OfficeSlide11 },
                        { image: OfficeSlide12 },
                        { image: OfficeSlide13 },
                        { image: OfficeSlide14 },
                        { image: OfficeSlide15 },
                        { image: OfficeSlide21 },
                        { image: OfficeSlide22 },
                        { image: OfficeSlide23 },
                        { image: OfficeSlide24 },
                    ]}
                />
            </div>
            <Footer />
            <WhatsappButton />
        </div>
    )
}
