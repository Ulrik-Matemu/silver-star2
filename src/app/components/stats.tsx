"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Smile, Home, Eye, Coffee } from "lucide-react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <Smile size={40} />, value: "21,560", label: "Plants in\n5 continents in\n42 different Countries" },
  { icon: <Coffee size={40} />, value: "26,416", label: "Main research centres\nin 22 Countries" },
  { icon: <Eye size={40} />, value: "1,000+", label: "Employees in the R&D\nDepartment worldwide" },
  { icon: <Home size={40} />, value: "85,934", label: "Products for the building industry\nof the Mapei Group" },
];

/**
 * Animated Counter Component
 */
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract only the numbers (e.g., "21,560" -> 21560)
  const numericValue = parseInt(value.replace(/[,+]/g, ""), 10);
  const suffix = value.includes("+") ? "+" : "";
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with commas back into the UI
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0</span>;
};

export const StatsSection = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/id/122/1920/1080"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[3px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="text-amber-400 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {stat.icon}
              </div>

              {/* Number */}
              <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">
                <Counter value={stat.value} />
              </h2>

              {/* Label */}
              <p className="text-slate-300 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] leading-relaxed whitespace-pre-line">
                {stat.label}
              </p>

              {/* Decorative Element */}
              <div className="w-12 h-1 bg-amber-500 mt-6 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};