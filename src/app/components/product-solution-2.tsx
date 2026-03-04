"use client";

import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    label: "NEW BUILDING",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="30" width="28" height="42" rx="1" stroke="#1a6fa8" strokeWidth="2"/>
        <rect x="14" y="38" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="24" y="38" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="14" y="50" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="24" y="50" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="17" y="60" width="10" height="12" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="38" y="18" width="34" height="54" rx="1" stroke="#1a6fa8" strokeWidth="2"/>
        <rect x="44" y="26" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="56" y="26" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="44" y="38" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="56" y="38" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="44" y="50" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="56" y="50" width="6" height="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="49" y="60" width="10" height="12" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="38" y1="14" x2="55" y2="6" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="72" y1="14" x2="55" y2="6" stroke="#1a6fa8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "OLD BUILDING",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M10 72 L10 36 L25 20 L40 36 L40 72Z" stroke="#1a6fa8" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M40 72 L40 30 L55 18 L70 30 L70 72Z" stroke="#1a6fa8" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="17" y="44" width="7" height="7" rx="3.5" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="47" y="38" width="7" height="7" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="58" y="38" width="7" height="7" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="47" y="50" width="7" height="7" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="58" y="50" width="7" height="7" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="20" y="58" width="10" height="14" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="50" y="58" width="10" height="14" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "COMMERCIAL BUILDING",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="10" y="22" width="60" height="50" stroke="#1a6fa8" strokeWidth="2"/>
        <rect x="18" y="30" width="10" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="35" y="30" width="10" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="52" y="30" width="10" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="18" y="45" width="10" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="35" y="45" width="10" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="52" y="45" width="10" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="30" y="58" width="20" height="14" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="10" y1="22" x2="40" y2="8" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="70" y1="22" x2="40" y2="8" stroke="#1a6fa8" strokeWidth="2"/>
        <rect x="38" y="14" width="4" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "INDUSTRIAL BUILDING",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="36" width="64" height="36" stroke="#1a6fa8" strokeWidth="2"/>
        <rect x="14" y="20" width="10" height="16" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="30" y="14" width="10" height="22" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="46" y="20" width="10" height="16" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="18" y="46" width="10" height="10" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="36" y="46" width="10" height="10" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="54" y="46" width="10" height="10" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="28" y="58" width="24" height="14" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "PUBLIC AREAS",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="28" width="40" height="44" rx="1" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M8 28 Q28 10 48 28" stroke="#1a6fa8" strokeWidth="2" fill="none"/>
        <rect x="16" y="40" width="10" height="10" rx="5" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="30" y="40" width="10" height="10" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="16" y="56" width="10" height="16" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="30" y="56" width="10" height="16" stroke="#1a6fa8" strokeWidth="1.5"/>
        <circle cx="60" cy="34" r="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="60" y1="42" x2="60" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="54" y1="50" x2="66" y2="50" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="60" y1="60" x2="54" y2="72" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="60" y1="60" x2="66" y2="72" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "SPORT AND URBAN FITTINGS",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="30" width="64" height="42" rx="2" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M8 30 Q40 8 72 30" stroke="#1a6fa8" strokeWidth="2" fill="none"/>
        <line x1="8" y1="8" x2="8" y2="30" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="72" y1="8" x2="72" y2="30" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M16 8 L8 8" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M64 8 L72 8" stroke="#1a6fa8" strokeWidth="2"/>
        <rect x="26" y="46" width="28" height="26" rx="1" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="40" y1="46" x2="40" y2="72" stroke="#1a6fa8" strokeWidth="1"/>
        <line x1="26" y1="59" x2="54" y2="59" stroke="#1a6fa8" strokeWidth="1"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "INFRASTRUCTURES",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <line x1="8" y1="60" x2="8" y2="28" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="72" y1="60" x2="72" y2="28" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M8 28 Q40 8 72 28" stroke="#1a6fa8" strokeWidth="2" fill="none"/>
        <line x1="8" y1="60" x2="72" y2="60" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="20" y1="42" x2="20" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="32" y1="34" x2="32" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="40" y1="30" x2="40" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="48" y1="34" x2="48" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="60" y1="42" x2="60" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="8" y1="66" x2="8" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
        <line x1="72" y1="66" x2="72" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "MARINE",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M26 50 L26 20 L54 20 L54 50Z" stroke="#1a6fa8" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="22" y="50" width="36" height="8" rx="2" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M16 58 Q22 64 28 60 Q34 56 40 60 Q46 64 52 60 Q58 56 64 60" stroke="#1a6fa8" strokeWidth="2" fill="none"/>
        <line x1="40" y1="8" x2="40" y2="20" stroke="#1a6fa8" strokeWidth="2"/>
        <path d="M40 8 L56 16 L40 20Z" stroke="#1a6fa8" strokeWidth="1.5" fill="none"/>
        <rect x="30" y="28" width="8" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <rect x="42" y="28" width="8" height="8" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="4" y1="72" x2="76" y2="72" stroke="#1a6fa8" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-4"
      style={{ fontFamily: "'Barlow', 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* Header */}
      <div
        className="text-center mb-6 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <h2
          className="text-4xl md:text-5xl mb-6"
          style={{ color: "#1a1a2e", letterSpacing: "-0.5px" }}
        >
          <strong style={{ fontWeight: 800 }}>Solutions</strong>{" "}
          <span style={{ fontWeight: 300 }}>for every type of site</span>
        </h2>
        <p
          className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#444", fontWeight: 400 }}
        >
          Mapei solutions enable you to solve any and every type of problem encountered in the
          building sector and, thanks to the use of high quality products, to enhance every type of
          building site with new innovations.
        </p>
        <p
          className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-3"
          style={{ color: "#444", fontWeight: 400 }}
        >
          Ours is a choice that looks to the future and is the result of our constant commitment to
          research, through the development of products and solutions which are not only highly
          technological, but which also help safeguard the environment, the health of those who apply
          our products and those who actually use the areas where they are applied.
        </p>
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-blue-200 mx-auto mb-12" />

      {/* Icons Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0">
          {solutions.map((item, index) => (
            <button
              key={item.label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-start px-2 py-6 group cursor-pointer border-0 bg-transparent outline-none focus:outline-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
              }}
            >
              {/* Icon wrapper */}
              <div
                className="flex items-center justify-center mb-4 transition-transform duration-300"
                style={{
                  transform: hoveredIndex === index ? "translateY(-6px) scale(1.08)" : "translateY(0) scale(1)",
                }}
              >
                <div
                  style={{
                    filter:
                      hoveredIndex === index
                        ? "drop-shadow(0 4px 12px rgba(26,111,168,0.35))"
                        : "none",
                    transition: "filter 0.3s ease",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Label */}
              <span
                className="text-center leading-tight font-semibold tracking-wider"
                style={{
                  fontSize: "0.65rem",
                  color: hoveredIndex === index ? "#1a6fa8" : "#1a6fa8",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
              </span>

              {/* Underline on hover */}
              <div
                className="mt-2 h-0.5 rounded-full transition-all duration-300"
                style={{
                  width: hoveredIndex === index ? "32px" : "0px",
                  backgroundColor: "#1a6fa8",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}