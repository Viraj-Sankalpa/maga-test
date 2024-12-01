'use client'
import { useEffect, useState } from "react";

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      image: "/images/slideshow/slideshow 5.jpg",
      caption: "Aster Residencies",
    },
    {
      id: 2,
      image: "/images/slideshow/slideshow 3.jpg",
      caption: "Faculty of Computing and Technology, University of Kelaniya",
    },
    {
      id: 3,
      image: "/images/slideshow/slideshow 4.jpg",
      caption: "Le Grand Hotel, Galle",
    },
    {
      id: 4,
      image: "/images/slideshow/slideshow1.jpg",
      caption: "Sethsiripaya Stage III",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 text-white text-2xl font-bold">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
