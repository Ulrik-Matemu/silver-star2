"use client"
import React, { useState, useEffect, useCallback } from 'react'; // Added useEffect and useCallback
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


const slides = [
  {
    title: "Concrete Admixtures",
    description: "This Line appeared in 1992 with the development of the first ever acrylic-based super-plasticiser in Europe. ",
    buttonText: "LEARN MORE",
    buttonLink: "/products/admixtures-concrete",
    image: "/products/concrete-hero.png",
    fontColor: "text-black md:text-white"
  },
   {
    title: " Waterproofing",
    description: "Advanced solutions for protecting structures from water ingress, from foundations to rooftops. new concept of color for wall coatings.",
    buttonText: "FIND OUT MORE",
    buttonLink: "/products/waterproofing",
    image: "/product-category-images/waterproofing.jpg",
    fontColor: "text-black"
  },
  {
    title: "Flooring Systems",
    description: "Durable and stylish flooring solutions for residential, commercial, and industrial spaces (Epoxy, Polyurethane, Sports, etc.)",
    buttonText: "EXPLORE",
    buttonLink: "/products/cementitious-resin-flooring",
    fontColor: "text-black md:text-white",
    image: "/product-category-images/parquet.jpg"
  },
  {
    title: "Tile Adhesives",
    description: "Strong, reliable adhesives designed for secure and long-lasting tile installation.",
    buttonText: "LEARN MORE",
    buttonLink: "/products/tile-adhesives-grout",
    image: "/product-category-images/tiling.png",
    fontColor: "text-black md:text-white"
  },
  {
    title: " Concrete Repair",
    description: "Reliable solutions for restoring and strengthening damaged or worn concrete surfaces.",
    buttonText: "LEARN MORE",
    buttonLink: "/products/admixtures-concrete",
    image: "/product-category-images/concrete-repair.png",
    fontColor: "text-black"
  },
  {
    title: "Mapecoat TNS Colorizer",
    description: "Select the sport you are interested in and color the different areas of the field with the 36 color palette of MAPECOAT TNS.",
    buttonText: "COLOR YOUR SPORTS FIELD",
    buttonLink: "/products/sports-flooring",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/slider/mapecoat-tns-colorizer.gif?sfvrsn=8ef4b073_0",
    fontColor: "md:text-white text-gray-800"
  },
  {
    title: "Building a sustainable future together.",
    description: "FROM NOW YOU CAN PLAY YOUR PART.",
    buttonText: "EXPLORE CAREERS",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/banner/zero-co2-cover.jpg?sfvrsn=5af71489_4",
    fontColor: "md:text-white text-gray-800"
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track hover
  const router = useRouter();

  // Wrap nextSlide in useCallback so it's a stable reference for the useEffect
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Autoplay Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // 3000ms = 3 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextSlide, isPaused]); // Re-run if paused state changes

  const handleClick = (link: string) => {
    router.push(link);
  }

  return (
    <div 
      className="relative w-full overflow-hidden bg-white font-sans"
      onMouseEnter={() => setIsPaused(true)}  // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on leave
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col md:relative md:h-[500px]">
            {/* ... rest of your slide mapping logic ... */}
            <div className="w-full md:h-full md:absolute md:inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex items-center px-12 md:px-6 py-8 md:px-24 md:h-full md:z-10">
              <div className="max-w-xl animate-fadeIn">
                <h1 className={`text-2xl md:text-5xl font-extrabold ${slide.fontColor} mb-2 leading-tight md:leading-none`}>
                  {slide.title}
                </h1>
                
                <div className={`w-20 h-[2px] md:w-full md:h-[1px] mb-4 md:mb-2 ${slide.fontColor.includes('white') ? 'bg-blue-600' : 'bg-blue-600'}`}></div>

                <p className={`text-sm md:text-lg ${slide.fontColor} font-medium mb-6 md:mb-8 leading-relaxed opacity-90`}>
                  {slide.description}
                </p>
               
                <button className={`inline-block bg-blue-700 md:bg-transparent hover:bg-blue-800  md:${slide.fontColor} px-8 py-3 rounded-full font-semibold transition-colors uppercase tracking-wide text-xs md:text-base border border-blue-700 md:border-white`} onClick={() => slide.buttonLink && handleClick(slide.buttonLink)}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-[125px] md:top-1/2 w-full flex justify-between px-2 md:px-4 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto bg-white/80 backdrop-blur-sm border border-gray-200 text-blue-800 p-2 rounded-full shadow-md hover:bg-white transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto bg-white/80 backdrop-blur-sm border border-gray-200 text-blue-800 p-2 rounded-full shadow-md hover:bg-white transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              current === i ? 'bg-blue-600 scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};