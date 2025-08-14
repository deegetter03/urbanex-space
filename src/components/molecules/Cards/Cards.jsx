import { Card } from "../../atoms/Card/Card";
import Residential from "../../../assets/cards/Residential.webp";
import Office from "../../../assets/cards/office.webp";
import Hospitality from "../../../assets/cards/hospitality.webp";

export const Cards = () => {
    return (
        <div className="px-4 sm:px-8 max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-semibold text-center mt-10 text-gray-800">
                What We Offer?
            </h1>
            <p className="text-lg sm:text-2xl font-thin text-center text-black mt-5 mb-10 max-w-3xl mx-auto">
                We shape spaces that echo with quiet elegance and bold character
            </p>

            <div className="flex flex-wrap justify-center gap-8">
                <Card image={Residential} title="Residential" />
                <Card image={Office} title="Office" />
                <Card image={Hospitality} title="Hospitality" />
            </div>

            <p className="text-base sm:text-xl font-thin text-center text-black mt-10 mb-10 max-w-3xl mx-auto">
                At Urbanex Space, we believe that great design should not only be beautiful,
                but deeply personal, which is why we focus on crafting interiors that feel like
                an extension of your identity.
            </p>
        </div>
    );
};
