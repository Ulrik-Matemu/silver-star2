"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Solution {
  id: number;
  image: string;
  title: string;
  href?: string;
}

const defaultSolutions: Solution[] = [
    {
        id: 1,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%201</text></svg>",
        title: "System for installing ceramic tiles in damp environments on waterproofing multipurpose panels",
        href: "#",
    },
    {
        id: 2,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%202</text></svg>",
        title: "System for waterproofing and soundproofing ceramic and glass mosaic coverings in bathrooms and wet environments",
        href: "#",
    },
    {
        id: 3,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%203</text></svg>",
        title: "System for installing ceramic tiles over existing ceramic floor tiles",
        href: "#",
    },
    {
        id: 4,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%204</text></svg>",
        title: "System for quickly installing large-format ceramic tiles over cracked flooring with an isolating and anti-fracture membrane",
        href: "#",
    },
    {
        id: 5,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%205</text></svg>",
        title: "Installation of ceramics inside SPA areas",
        href: "#",
    },
    {
        id: 6,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%206</text></svg>",
        title: "Multi-layered, acrylic and polyurethane resin-based system for pedestrian areas tribunes and in stadiums and sports areas",
        href: "#",
    },
    {
        id: 7,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%207</text></svg>",
        title: "Multi-layered, acrylic and polyurethane resin-based system for making outdoor velodromes",
        href: "#",
    },
    {
        id: 8,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%208</text></svg>",
        title: "System for resilient surfaces on wet or with rising damp substrates",
        href: "#",
    },
    {
        id: 9,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%209</text></svg>",
        title: "Multi-layered acrylic resin-based system for multi-purpose indoor and outdoor playing surfaces with monolic concrete sub-base",
        href: "#",
    },
    {
        id: 10,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2010</text></svg>",
        title: "Multi-layered two-component polyurethane resin-based system for professional indoor and outdoor bowls courts",
        href: "#",
    },
    {
        id: 11,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2011</text></svg>",
        title: "Multi-layered two-component polyurethane resin system for outdoor multi-purpose playing surfaces",
        href: "#",
    },
    {
        id: 12,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2012</text></svg>",
        title: "High-elasticity multi-layered acrylic resin-based system for multisport playing surfaces with stabilized sub-base",
        href: "#",
    },
    {
        id: 13,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2013</text></svg>",
        title: "Multi-layered, acrylic resin-based system that may be modulated on site by adding selected aggregates to make indoor and outdoor pro-grade tennis courts",
        href: "#",
    },
    {
        id: 14,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2014</text></svg>",
        title: "System for sports resilient surfaces installation in gymnasium",
        href: "#",
    },
    {
        id: 15,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2015</text></svg>",
        title: 'System for installing LVT ("Luxury Vinyl Tiles") in gymnasiums',
        href: "#",
    },
    {
        id: 16,
        image:
            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='36' fill='%23777' font-family='Arial, Helvetica, sans-serif'>Solution%2016</text></svg>",
        title: "Water-based finishing system for wooden sports floors",
        href: "#",
    },
];

interface SolutionsGridProps {
  solutions?: Solution[];
  discoverHref?: string;
}

export default function SolutionsGrid({
  solutions = defaultSolutions,
  discoverHref = "#",
}: SolutionsGridProps) {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "64px 24px 80px",
        fontFamily: "'Barlow', 'Helvetica Neue', Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#1a1a2e",
            letterSpacing: "-0.3px",
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          <span style={{ fontWeight: 300 }}>Find out our </span>
          <strong style={{ fontWeight: 800 }}>solutions</strong>
        </h2>
        <div
          style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#1a6fa8",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {solutions.map((solution, index) => (
          <Link
            key={solution.id}
            href={solution.href ?? "#"}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e8e8e8",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundColor: "#fff",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: `opacity 0.5s ease ${Math.min(index * 40, 400)}ms, transform 0.5s ease ${Math.min(index * 40, 400)}ms, box-shadow 0.3s ease`,
              boxShadow: hoveredId === solution.id
                ? "0 8px 28px rgba(0,0,0,0.12)"
                : "0 1px 4px rgba(0,0,0,0.05)",
            }}
            onMouseEnter={() => setHoveredId(solution.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                style={{
                  objectFit: "cover",
                  transform: hoveredId === solution.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.4s ease",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
              />
            </div>

            {/* Title */}
            <div style={{ padding: "14px 16px 20px" }}>
              <p
                style={{
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                  color: hoveredId === solution.id ? "#1a6fa8" : "#222",
                  margin: 0,
                  fontWeight: 400,
                  transition: "color 0.2s ease",
                }}
              >
                {solution.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "56px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
        }}
      >
        <Link
          href={discoverHref}
          style={{
            display: "inline-block",
            padding: "14px 40px",
            borderRadius: "50px",
            backgroundColor: hoveredId === -1 ? "#155a8a" : "#1a6fa8",
            color: "#ffffff",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "background-color 0.25s ease, transform 0.2s ease",
            transform: hoveredId === -1 ? "scale(1.03)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredId(-1)}
          onMouseLeave={() => setHoveredId(null)}
        >
          Discover All Our Solutions
        </Link>
      </div>
    </section>
  );
}