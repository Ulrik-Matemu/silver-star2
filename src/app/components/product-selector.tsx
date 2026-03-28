"use client";
import { useState, useEffect, useCallback } from "react"; // Added useEffect and useCallback
import Image from "next/image";
import Link from "next/link";
import { categoryInfo } from "../data/categories";
import products from "../data/products.json";
import { ChevronRight } from "lucide-react";

const ProductSelector = () => {
  const categories = Object.keys(categoryInfo);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isPaused, setIsPaused] = useState(false); // State to handle hover pausing

  const filteredProducts = products.filter(
    (product) => product.line === selectedCategory
  );

  // Memoized function to cycle to the next category
  const nextCategory = useCallback(() => {
    setSelectedCategory((prev) => {
      const currentIndex = categories.indexOf(prev);
      const nextIndex = (currentIndex + 1) % categories.length; // Loop back to start
      return categories[nextIndex];
    });
  }, [categories]);

  // Autoplay Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        nextCategory();
      }, 3000); // Swapping every 3 seconds for better readability
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextCategory, isPaused]);

  return (
    <div 
      className="py-12 bg-white"
      onMouseEnter={() => setIsPaused(true)}   // Pause when mouse is over section
      onMouseLeave={() => setIsPaused(false)}  // Resume when mouse leaves
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            Our Best
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">Products</h1>
        </div>

        {/* Category Navigation */}
        <div className="flex overflow-x-auto scrollbar-hide mb-8 pb-4">
          <div className="flex flex-nowrap -mx-2">
            {categories.map((category) => (
              <div key={category} className="px-2">
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsPaused(true); // Optionally stay paused if they manually clicked
                  }}
                  className={`px-6 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-900 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {categoryInfo[category].title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 3).map((product) => (
            <Link href={`/products/${product.line}/${product.id}`} key={product.id}>
              <div className="group block bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-900 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm text-blue-700 font-medium mt-2">View Details →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {filteredProducts.length > 3 && (
          <div className="text-center mt-10">
            <Link href={`/products/${selectedCategory}`}>
              <div className="inline-flex items-center px-8 py-3 text-base font-bold rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
                View All {categoryInfo[selectedCategory].title}
                <ChevronRight className="ml-2 h-5 w-5" />
              </div>
            </Link>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ProductSelector;