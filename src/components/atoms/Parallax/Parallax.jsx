import { ParallaxBanner } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

export const Parallax = ({ image, description }) => {
  // Detect mobile / tablet
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ParallaxBanner
      layers={[
        {
          speed: isMobile ? -8 : -20, // lighter effect on mobile
          children: (
            <img
              src={image}
              alt="Parallax background"
              className="w-full h-full object-cover will-change-transform"
            />
          ),
        },
        {
          speed: 0,
          children: (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent will-change-transform" />
          ),
        },
      ]}
      className="w-full h-screen relative will-change-transform"
      shouldAlwaysCompleteAnimation
    >
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-32 mt-16">
        <div className="backdrop-blur-sm border border-white/100 rounded-xl px-6 py-4 md:px-8 md:py-6 shadow-lg max-w-full md:max-w-3xl md:mt-12">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold text-white drop-shadow-md tracking-tight leading-tight text-center md:text-left">
            {description}
          </h1>
        </div>
      </div>
    </ParallaxBanner>
  );
};
