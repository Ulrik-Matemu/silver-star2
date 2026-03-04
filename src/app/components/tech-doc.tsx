"use client";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    label: "TECHNICAL DOCUMENTATION AREA",
    href: "#",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="96" height="96">
        <path d="M20 80 L20 20 L65 80 Z" stroke="#1a6fa8" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <rect x="62" y="18" width="14" height="62" rx="1" stroke="#1a6fa8" strokeWidth="2.5" fill="none"/>
        <line x1="62" y1="28" x2="68" y2="28" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="62" y1="36" x2="70" y2="36" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="62" y1="44" x2="68" y2="44" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="62" y1="52" x2="70" y2="52" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="62" y1="60" x2="68" y2="60" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="62" y1="68" x2="70" y2="68" stroke="#1a6fa8" strokeWidth="1.5"/>
        <line x1="16" y1="80" x2="80" y2="80" stroke="#1a6fa8" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    label: "FIND OUT OUR TOOLS",
    href: "#",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="96" height="96">
        <path d="M25 55 Q25 28 50 24 Q75 28 75 55" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <line x1="18" y1="57" x2="82" y2="57" stroke="#1a6fa8" strokeWidth="2.5"/>
        <path d="M18 57 Q18 63 50 63 Q82 63 82 57" stroke="#1a6fa8" strokeWidth="2.5" fill="none"/>
        <path d="M36 44 Q50 40 64 44" stroke="#1a6fa8" strokeWidth="1.5" fill="none"/>
        <line x1="40" y1="75" x2="62" y2="42" stroke="#1a6fa8" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M62 42 L69 35 L66 46 Z" stroke="#1a6fa8" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <line x1="16" y1="82" x2="84" y2="82" stroke="#1a6fa8" strokeWidth="2.5"/>
      </svg>
    ),
  },
];

export default function TechnicalDocumentationSection() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        padding: "64px 16px",
        backgroundColor: "#f5f5f5",
        fontFamily: "'Barlow', 'Helvetica Neue', Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1a1a2e",
            letterSpacing: "-0.5px",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          <span style={{ fontWeight: 300 }}>Technical </span>
          <strong style={{ fontWeight: 800 }}>documentation</strong>
          <span style={{ fontWeight: 300 }}> and </span>
          <strong style={{ fontWeight: 800 }}>tools</strong>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: 1.8,
            color: "#555",
            fontWeight: 400,
          }}
        >
          Our documentation is transparent and full of technical details, from areas of use for each
          product right up to technical specifications. It is updated constantly and includes
          dedicated tools to help you select and use the products from our catalogue. A precious
          online tool that will help you find exactly what you need to transform a world of designs
          and projects into reality.
        </p>
      </div>

      {/* Two-column cards */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 32px",
              borderRight: index === 0 ? "1px solid #cccccc" : "none",
              cursor: "pointer",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Icon */}
            <div
              style={{
                marginBottom: "24px",
                transform: hovered === index ? "translateY(-6px) scale(1.07)" : "translateY(0) scale(1)",
                filter: hovered === index
                  ? "drop-shadow(0 6px 14px rgba(26,111,168,0.3))"
                  : "none",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
            >
              {item.icon}
            </div>

            {/* Label */}
            <a
              href={item.href}
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#1a6fa8",
                textDecoration: hovered === index ? "underline" : "none",
                textUnderlineOffset: "3px",
                marginBottom: "16px",
                textAlign: "center",
                transition: "text-decoration 0.2s ease",
              }}
            >
              {item.label}
            </a>

            {/* Arrow */}
            <div
              style={{
                transform: hovered === index ? "translateX(5px)" : "translateX(0)",
                transition: "transform 0.25s ease",
              }}
            >
              <svg viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="16">
                <line x1="0" y1="8" x2="25" y2="8" stroke="#1a6fa8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19 2 L28 8 L19 14" stroke="#1a6fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}