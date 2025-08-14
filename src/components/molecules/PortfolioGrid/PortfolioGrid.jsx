import { PortfolioCard } from '../../atoms/PortfolioCard/PortfolioCard';

export const PortfolioGrid = ({ cards }) => {
    return (
        <div className="px-8 sm:px-16 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 justify-start">
                {cards.map((card, index) => (
                <PortfolioCard key={index} image={card.image} />
                ))}
            </div>
        </div>

    );
};
