"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { title } from 'process';

const slides = [
  {
    title: "Silver Star Color",
    description: "Petal by petal, we cultivate global innovation. ",
    buttonText: "LEARN MORE",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/banner/slider-homepage-mapei-color.jpg?sfvrsn=f9d51b8b_1"
  },
  {
    title: "Building a sustainable future together.",
    description: "FROM NOW YOU CAN PLAY YOUR PART.",
    buttonText: "EXPLORE CAREERS",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/banner/zero-co2-cover.jpg?sfvrsn=5af71489_4",
    fontColor: "text-white"
  },
  {
    title: "Master Collection",
    description: "A new concept of color for wall coatings.",
    buttonText: "FIND OUT MORE",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/slider/slider-homepage-2020-master-collection.jpg?sfvrsn=78928771_0",
  },
  {
    title: "Mapecoat TNS Colorizer",
    description: "Select the sport you are interested in and color the different areas of the field with the 36 color palette of MAPECOAT TNS.",
    buttonText: "COLOR YOUR SPORTS FIELD",
    image: "https://cdnmedia.mapei.com/images/librariesprovider59/slider/mapecoat-tns-colorizer.gif?sfvrsn=8ef4b073_0",
    fontColor: "text-white"
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    /* Adjusted height for mobile to prevent text clipping */
    <div className="relative w-full h-[550px] md:h-[450px] overflow-hidden bg-gray-100 font-sans">
      {/* Background Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            /* Added responsive padding: px-8 on mobile, md:px-24/38 on desktop */
            className="min-w-full h-full bg-cover bg-center flex items-center px-14 md:px-24 lg:px-24"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Text Content */}
            <div className="max-w-xl animate-fadeIn mt-[-40px] md:mt-0">
              {/* Responsive text sizes: text-3xl on mobile, text-5xl on desktop */}
              <h1 className={`text-3xl md:text-5xl font-extrabold ${slide.fontColor || 'text-gray-800'} mb-2 leading-none`}>
                {slide.title}
              </h1>
               <div className='w-full h-[1px] bg-white mb-6 md:mb-2'></div>
              {/* Responsive text sizes: text-sm on mobile, text-lg on desktop */}

              <p className={`text-sm md:text-lg ${slide.fontColor || 'text-gray-800'} font-medium mb-6 md:mb-8 leading-relaxed`}>
                {slide.description}
              </p>
             
              <button className={`bg-transparent hover:bg-[#005a8e] ${slide.fontColor || 'text-gray-800'}  px-6 md:px-8 py-3 rounded-full font-semibold transition-colors uppercase tracking-wide text-sm md:text-base border border-white`}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on very small screens or made smaller */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white border border-blue-800 text-blue-600 p-1.5 md:p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
      >
        <ChevronLeft size={24} className="md:w-[28px] md:h-[28px]" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white border border-blue-800 text-blue-600 p-1.5 md:p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
      >
        <ChevronRight size={24} className="md:w-[28px] md:h-[28px]" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              current === i ? 'bg-[#007bc1] scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};