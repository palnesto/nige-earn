import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode[];
  itemWidth?: number;
  gap?: number;
  showMultiple?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  itemWidth = 250,
  gap = 16,
  showMultiple = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const maxSlides = Math.max(0, children.length - 1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(maxSlides, currentSlide + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return;

    const currentX = e.touches[0].clientX;
    const diff = touchStart - currentX;

    if (diff > 50) {
      handleNext();
      setIsTouching(false);
    } else if (diff < -50) {
      handlePrev();
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  // Calculate items per view based on container width
  const [itemsPerView, setItemsPerView] = useState(showMultiple ? 1.5 : 1);

  useEffect(() => {
    if (!carouselRef.current) return;

    const updateItemsPerView = () => {
      const containerWidth = carouselRef.current?.clientWidth || 0;
      const newItemsPerView = showMultiple
        ? Math.max(1.5, Math.floor(containerWidth / (itemWidth + gap)))
        : 1;
      setItemsPerView(newItemsPerView);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, [itemWidth, gap, showMultiple]);

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentSlide * (itemWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${itemWidth}px`,
                opacity:
                  showMultiple && index > currentSlide + itemsPerView
                    ? "0.5"
                    : "1",
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {children.length > itemsPerView && (
        <div className="flex justify-center mt-4 gap-1">
          {Array.from({
            length: Math.ceil(children.length / itemsPerView),
          }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentSlide / itemsPerView) === index
                  ? "bg-teal-600"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index * itemsPerView)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {children.length > itemsPerView && (
        <>
          <button
            className={`absolute top-1/2 -left-2 transform -translate-y-1/2 p-1 rounded-full bg-white shadow-md 
              ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            onClick={handlePrev}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          <button
            className={`absolute top-1/2 -right-2 transform -translate-y-1/2 p-1 rounded-full bg-white shadow-md
              ${
                currentSlide >= maxSlides
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            onClick={handleNext}
            disabled={currentSlide >= maxSlides}
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
