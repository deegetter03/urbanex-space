import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import hospitality11 from "../../assets/portfolio/hospitality/hospitality11.webp"
import hospitality12 from "../../assets/portfolio/hospitality/hospitality12.webp"
import hospitality21 from "../../assets/portfolio/hospitality/hospitality21.webp"
import hospitality22 from "../../assets/portfolio/hospitality/hospitality22.webp"
import HospitalitySlide11 from "../../assets/portfolio/hospitality/HospitalitySlide11.webp"
import HospitalitySlide12 from "../../assets/portfolio/hospitality/HospitalitySlide12.webp"
import HospitalitySlide13 from "../../assets/portfolio/hospitality/HospitalitySlide13.webp"
import HospitalitySlide14 from "../../assets/portfolio/hospitality/HospitalitySlide14.webp"
import HospitalitySlide15 from "../../assets/portfolio/hospitality/HospitalitySlide15.webp"
import HospitalitySlide21 from "../../assets/portfolio/hospitality/HospitalitySlide21.webp"
import HospitalitySlide22 from "../../assets/portfolio/hospitality/HospitalitySlide22.webp"
import HospitalitySlide23 from "../../assets/portfolio/hospitality/HospitalitySlide23.webp"
import HospitalitySlide24 from "../../assets/portfolio/hospitality/HospitalitySlide24.webp"
import HospitalitySlide25 from "../../assets/portfolio/hospitality/HospitalitySlide25.webp"
import HospitalitySlide26 from "../../assets/portfolio/hospitality/HospitalitySlide26.webp"
import HospitalitySlide27 from "../../assets/portfolio/hospitality/HospitalitySlide27.webp"
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton"
import { Footer } from "../../components/molecules/Footer/Footer"

export const HospitalityPortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 mt-36">
                    Our Hospitality Projects
                </h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
                    Crafting Destinations That Tell a Story
                </h2>
                <p className="text-base sm:text-lg text-center mb-8 max-w-3xl mx-auto">
                    Hospitality spaces are more than just places to stay, they're immersive worlds. We design hotels and resorts with a narrative approach, ensuring each element reflects the brand’s character and cultural context. Whether it’s an opulent lobby or a tranquil spa suite, our focus is on creating luxurious yet welcoming spaces that leave a lasting impression on every guest, every time.
                </p>
                <hr className="border-t-1.5 border-gray-300 mb-8" />

                <PortfolioPage
                    cards={[
                        { image: hospitality11 },
                        { image: hospitality12 },
                        { image: hospitality21 },
                        { image: hospitality22 },
                    ]}
                    images={[
                        { image: HospitalitySlide11 },
                        { image: HospitalitySlide12 },
                        { image: HospitalitySlide13 },
                        { image: HospitalitySlide14 },
                        { image: HospitalitySlide15 },
                        { image: HospitalitySlide21 },
                        { image: HospitalitySlide22 },
                        { image: HospitalitySlide23 },
                        { image: HospitalitySlide24 },
                        { image: HospitalitySlide25 },
                        { image: HospitalitySlide26 },
                        { image: HospitalitySlide27 },
                    ]}
                />
            </div>
            <Footer />
            <WhatsappButton />
        </div>
    )
}
