import { ParallaxBanner } from "react-scroll-parallax";

export const Parallax = ({ image, description }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          speed: -50,
          expanded: false,
          className: "object-cover"
        },
        {
          speed: 0,
          children: (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          )
        }
      ]}
      className="w-full h-screen relative"  // Ensures image covers the full height of mobile screens
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
