import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect, useRef } from "react";

export const PortfolioImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    drag: true,
  });

  const [thumbRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: Math.min(images.length, 5),
      spacing: 12,
    },
  });

  // Auto-slide interval
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timerRef.current);
  }, []);

  // Keep thumbnail in sync
  useEffect(() => {
    thumbRef.current?.moveToIdx(currentSlide);
  }, [currentSlide]);

  const goPrev = () => instanceRef.current?.prev();
  const goNext = () => instanceRef.current?.next();

  return (
    <div className="w-full flex flex-col items-center gap-4 px-4 mb-10">
      {/* Main Slider with Arrows */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-lg shadow-md">
        <div ref={sliderRef} className="keen-slider h-[500px] md:h-[600px] lg:h-[700px] rounded-lg">
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide flex justify-center items-center">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail Slider */}
      <div className="w-full max-w-5xl overflow-hidden px-2">
        <div ref={thumbRef} className="keen-slider">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`keen-slider__slide cursor-pointer transition-opacity duration-200 ${
                currentSlide === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                className="h-24 w-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
