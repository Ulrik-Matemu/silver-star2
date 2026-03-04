"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductLine {
  title: string;
  image: string;
  href: string;
  accentColor?: string;
}

interface ProductLinesSectionProps {
  title?: string;
  description?: string;
  items: ProductLine[];
}

export default function ProductLinesSection({
  title = "Our product lines",
  description = "Over the years we have created thousands of specific products with properties and characteristics to meet all building industry needs.",
  items,
}: ProductLinesSectionProps) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our <span className="font-bold">product lines</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Title */}
                <div className="p-4 flex items-start gap-2">
                  <span
                    className="w-1.5 h-6 rounded-sm mt-1"
                    style={{
                      backgroundColor: item.accentColor || "#1d4ed8",
                    }}
                  />
                  <h3 className="text-sm font-semibold text-blue-700 uppercase leading-snug">
                    {item.title}
                  </h3>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/catalogue.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Download Our Products Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}