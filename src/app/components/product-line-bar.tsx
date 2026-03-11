"use client";

import { useState } from "react";

type ProductLine = {
    label: string;
    color: string;
    link: string;
};

const productLines: ProductLine[][] = [
    [
        { label: "Installation of ceramics and natural stone", color: "#F5A623", link: "/products/ceramic-stone" },
        { label: "Sports Flooring", color: "#E84B3A", link: "/products/sports-flooring" },
        { label: "Building", color: "#4CAF8A", link: "/products/building" },
        { label: "Renovation, Green building and Restoration of historic buildings", color: "#F5A623", link: "/products/renovation-green-building-restoration-historic-buildings" },
        { label: "Underground construction (UTT)", color: "#F5A623", link: "/products/underground-construction" },
        { label: "Profiles and shower systems", color: "#9E9E9E", link: "/products/profiles-shower-systems" },
        { label: "Airport pavements", color: "#9E9E9E", link: "/products/airport-pavements" },
    ],
    [
        { label: "Complementary products and tools", color: "#F5A623", link: "/products/complementary-products-tools" },
        { label: "Wooden Flooring", color: "#E8763A", link: "/products/wooden-flooring" },
        { label: "Admixtures for Concrete", color: "#9E9E9E", link: "/products/admixtures-concrete" },
        { label: "Thermal Insulation", color: "#9E9E9E", link: "/products/thermal-insulation" },
        { label: "Sealing, bonding and anchoring", color: "#9E9E9E", link: "/products/sealing-bonding-anchoring" },
        { label: "Skirting boards", color: "#4CAF8A", link: "/products/skirting-boards" },
        { label: "Renders, bedding mortars and skim coats", color: "#4CAF8A", link: "/products/renders-bedding-mortars-skim-coats" },
    ],
    [
        { label: "Cleaning, Maintaining and Protecting Surfaces", color: "#9E9E9E", link: "/products/cleaning-maintaining-protecting-surfaces" },
        { label: "Cementitious and Resin Flooring", color: "#9E9E9E", link: "/products/cementitious-resin-flooring" },
        { label: "Architectural Stone Paving", color: "#9E9E9E", link: "/products/architectural-stone-paving" },
        { label: "Wall paints and coatings", color: "#9E9E9E", link: "/products/wall-paints-coatings" },
        { label: "Cement additives (C-ADD)", color: "#9E9E9E", link: "/products/cement-additives-c-add" },
        { label: "Raised floors", color: "#9E9E9E", link: "/products/raised-floors" },
        { label: "Dehumidification", color: "#9E9E9E", link: "/products/dehumidification" },
    ],
    [
        { label: "Resilient, LVT and Textile Materials", color: "#E84B3A", link: "/products/resilient-lvt-textile-materials" },
        { label: "Acoustic Insulation", color: "#9E9E9E", link: "/products/acoustic-insulation" },
        { label: "Structural Strengthening", color: "#9E9E9E", link: "/products/structural-strengthening" },
        { label: "Waterproofing", color: "#E84B3A", link: "/products/waterproofing" },
        { label: "Profiles for floors and coverings", color: "#9E9E9E", link: "/products/profiles-floors-coverings" },
        { label: "Urban paving", color: "#9E9E9E", link: "/products/urban-paving" },
        { label: "Screeds and preparation of floor substrates", color: "#4CAF8A", link: "/products/screeds-preparation-floor-substrates" },
    ],
];

export default function ProductLines() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (

        <>
            <section
                style={{
                    backgroundColor: "#2A2A2A",
                    padding: "48px 56px",
                    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                    minHeight: "320px",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "36px",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            width: "24px",
                            height: "2px",
                            backgroundColor: "#888",
                        }}
                    />
                    <h2
                        style={{
                            color: "#FFFFFF",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            margin: 0,
                        }}
                    >
                        Product Lines
                    </h2>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "0 40px",
                    }}
                >
                    {productLines.map((column, colIndex) => (
                        <ul
                            key={colIndex}
                            style={{
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                                borderTop: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            {column.map((item, itemIndex) => {
                                const itemKey = `${colIndex}-${itemIndex}`;
                                const isHovered = hoveredItem === itemKey;

                                return (
                                    <li
                                        key={itemIndex}
                                        onMouseEnter={() => setHoveredItem(itemKey)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px",
                                            padding: "11px 0",
                                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                                            cursor: "pointer",
                                            transition: "background 0.15s ease",
                                        }}
                                    >
                                        {/* Colored bar */}
                                        <span
                                            style={{
                                                flexShrink: 0,
                                                marginTop: "3px",
                                                width: "3px",
                                                height: "14px",
                                                borderRadius: "2px",
                                                backgroundColor: item.color,
                                                transition: "transform 0.2s ease, opacity 0.2s ease",
                                                transform: isHovered ? "scaleY(1.3)" : "scaleY(1)",
                                                opacity: isHovered ? 1 : 0.85,
                                            }}
                                        />
                                        <a
                                            href={item.link}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                                display: "block",
                                                width: "100%",
                                            }}
                                        >
                                        {/* Label */}
                                        <span
                                            style={{
                                                fontSize: "12.5px",
                                                lineHeight: "1.5",
                                                fontWeight: 400,
                                                letterSpacing: "0.01em",
                                                color: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                                                transition: "color 0.15s ease",
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    ))}
                </div>
            </section>
            <div className="bg-[#1a1a1a] w-full">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <p className="text-center md:text-right text-xs text-gray-500 tracking-wide">
                        Copyright © 2026 Silverstar Resources Company Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
}