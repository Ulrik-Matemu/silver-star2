"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Silver Star Color",
    description: "Petal by petal, we cultivate global innovation.",
    buttonText: "LEARN MORE",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/banner/slider-homepage-mapei-color.jpg?sfvrsn=f9d51b8b_1",
    fontColor: "text-gray-800"
  },
  {
    title: "Building a sustainable future together.",
    description: "FROM NOW YOU CAN PLAY YOUR PART.",
    buttonText: "EXPLORE CAREERS",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/banner/zero-co2-cover.jpg?sfvrsn=5af71489_4",
    fontColor: "md:text-white text-gray-800"
  },
  {
    title: "Master Collection",
    description: "A new concept of color for wall coatings.",
    buttonText: "FIND OUT MORE",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/slider/slider-homepage-2020-master-collection.jpg?sfvrsn=78928771_0",
    fontColor: "text-gray-800"
  },
  {
    title: "Mapecoat TNS Colorizer",
    description: "Select the sport you are interested in and color the different areas of the field with the 36 color palette of MAPECOAT TNS.",
    buttonText: "COLOR YOUR SPORTS FIELD",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/slider/mapecoat-tns-colorizer.gif?sfvrsn=8ef4b073_0",
    fontColor: "md:text-white text-gray-800"
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden bg-white font-sans">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col md:relative md:h-[500px]">
            
            {/* Image Section: Top on mobile, Background on Desktop */}
            <div className="w-full  md:h-full md:absolute md:inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section: Below image on mobile, Overlay on Desktop */}
            <div className="relative flex items-center px-6 py-8 md:px-24 md:h-full md:z-10">
              <div className="max-w-xl animate-fadeIn">
                <h1 className={`text-2xl md:text-5xl font-extrabold ${slide.fontColor} mb-2 leading-tight md:leading-none`}>
                  {slide.title}
                </h1>
                
                <div className={`w-20 h-[2px] md:w-full md:h-[1px] mb-4 md:mb-2 ${slide.fontColor.includes('white') ? 'bg-white' : 'bg-blue-600'}`}></div>

                <p className={`text-sm md:text-lg ${slide.fontColor} font-medium mb-6 md:mb-8 leading-relaxed opacity-90`}>
                  {slide.description}
                </p>
               
                <button className={`inline-block bg-blue-700 md:bg-transparent hover:bg-blue-800 text-white md:${slide.fontColor} px-8 py-3 rounded-full font-semibold transition-colors uppercase tracking-wide text-xs md:text-base border border-blue-700 md:border-white`}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation - Positioned relative to the whole container */}
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