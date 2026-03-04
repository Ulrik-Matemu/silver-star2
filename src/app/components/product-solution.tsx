"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Item {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface ProductsSolutionsSectionProps {
  heading?: string;
  description?: string;
  items?: Item[];
}

export default function ProductsSolutionsSection({
  heading = "Products, solutions and tools available",
  description = "Here, architects and professionals from all around the world will find constant technical support and assistance, exhaustive information about innovative products, practical solutions for every possible problem in the building sector and support for design work and the writing of technical specifications: so many solutions for so many different needs.",
  items,
}: ProductsSolutionsSectionProps) {
  const defaultItems: Item[] = [
    {
      title: "Products",
      href: "/products",
      icon: (
        <div className="w-16 h-16 border-2 border-blue-600 rounded-md" />
      ),
    },
    {
      title: "Solutions",
      href: "/solutions",
      icon: (
        <div className="w-16 h-16 border-2 border-blue-600 rounded-md" />
      ),
    },
    {
      title: "Tools & Downloads",
      href: "/tools",
      icon: (
        <div className="w-16 h-16 border-2 border-blue-600 rounded-md" />
      ),
    },
  ];

  const content = items || defaultItems;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            <span className="font-bold">Products, solutions</span> and tools available
          </h2>

          <div className="w-24 h-[1px] bg-gray-300 mx-auto my-6" />

          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {content.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col items-center space-y-6"
            >
              {/* Icon */}
              <div className="text-blue-600 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="uppercase tracking-wide text-blue-700 font-semibold">
                {item.title}
              </h3>

              {/* Arrow */}
              <ArrowRight
                className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2"
                size={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}