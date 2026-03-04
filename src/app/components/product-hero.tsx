"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function ProductHero({
  title,
  description,
  backgroundImage,
}: ProductHeroProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Product Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-sm md:text-lg leading-relaxed opacity-90 mb-10">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#product-lines"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Browse Product Lines
          </Link>

          <Link
            href="#search-products"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 hover:bg-gray-200 transition font-semibold"
          >
            Search Products
          </Link>
        </div>
      </div>
    </section>
  );
}