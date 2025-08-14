import { PortfolioImageSlider } from "../../atoms/PortfolioImageSlider/PortfolioImageSlider";
import { PortfolioGrid } from "../../molecules/PortfolioGrid/PortfolioGrid";

export const PortfolioPage = ({ cards, images }) => {
  return (
    <div>
      {/* Portfolio Grid Section */}
      <div className="mb-10">
        <PortfolioGrid cards={cards} />
      </div>

      {/* Portfolio Image Slider Section */}
      <div>
        <PortfolioImageSlider images={images.map((image) => image.image)} />
      </div>
    </div>
  );
};
