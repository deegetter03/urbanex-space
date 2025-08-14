export const PortfolioCard = ({ image }) => {
    return (
        <div>
            <div>
                <img
                    className="w-full h-[36rem] rounded-md object-cover shadow-lg shadow-gray-300"
                    src={image}
                    alt="Card Image"
                />

            </div>
        </div>
    )
}