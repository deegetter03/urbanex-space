export const Card = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div>
                <img
                    className="w-72 sm:w-80 h-80 sm:h-96 object-cover rounded-lg shadow-lg shadow-gray-500/80 hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={image}
                    alt="Card Image"
                />
            </div>
            <div className="mt-4 px-2">
                <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
                {description && (
                    <p className="text-base sm:text-lg font-thin text-gray-600 mt-2 max-w-sm">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};
