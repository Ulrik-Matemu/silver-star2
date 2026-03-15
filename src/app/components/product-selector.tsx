"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryInfo } from "../data/categories";
import products from "../data/products.json";
import { ChevronRight } from "lucide-react";

const ProductSelector = () => {
  const categories = Object.keys(categoryInfo);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products.filter(
    (product) => product.line === selectedCategory
  );

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase">
            Our Best
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">Products</h1>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide mb-8 pb-4">
          <div className="flex flex-nowrap -mx-2">
            {categories.map((category) => (
              <div key={category} className="px-2">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {categoryInfo[category].title}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 3).map((product) => (
            <Link href={`/products/${product.line}/${product.id}`} key={product.id}>
              <div className="group block bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-900 transition-colors duration-200">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length > 3 && (
          <div className="text-center mt-8">
            <Link href={`/products?line=${selectedCategory}`}>
              <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200">
                View More
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </div>
            </Link>
          </div>
        )}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductSelector;
