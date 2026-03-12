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

// Flatten columns into a single array for mobile/tablet reflow
const allItems = productLines.flat();

export default function ProductLines() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <>
            <style>{`
                .product-lines-section {
                    background-color: #2A2A2A;
                    padding: 48px 56px;
                    font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
                    min-height: 320px;
                }

                .product-lines-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0 40px;
                }

                /* Tablet: 2 columns */
                @media (max-width: 1023px) {
                    .product-lines-section {
                        padding: 40px 32px;
                    }
                    .product-lines-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0 28px;
                    }
                }

                /* Mobile: 1 column */
                @media (max-width: 639px) {
                    .product-lines-section {
                        padding: 32px 20px;
                    }
                    .product-lines-grid {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }
                }

                .product-lines-column {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    border-top: 1px solid rgba(255,255,255,0.08);
                }

                .product-lines-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 11px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    cursor: pointer;
                    transition: background 0.15s ease;
                }

                .product-lines-item:last-child {
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                }

                .product-lines-bar {
                    flex-shrink: 0;
                    margin-top: 3px;
                    width: 3px;
                    height: 14px;
                    border-radius: 2px;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }

                .product-lines-label {
                    font-size: 12.5px;
                    line-height: 1.5;
                    font-weight: 400;
                    letter-spacing: 0.01em;
                    transition: color 0.15s ease;
                }

                .product-lines-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    width: 100%;
                }

                .product-lines-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 36px;
                }

                .product-lines-header-bar {
                    display: inline-block;
                    width: 24px;
                    height: 2px;
                    background-color: #888;
                    flex-shrink: 0;
                }

                .product-lines-title {
                    color: #FFFFFF;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    margin: 0;
                }

                .footer-bar {
                    background-color: #1a1a1a;
                    width: 100%;
                }

                .footer-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 24px 16px;
                }

                .footer-text {
                    text-align: right;
                    font-size: 12px;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin: 0;
                }

                @media (max-width: 767px) {
                    .footer-text {
                        text-align: center;
                    }
                }
            `}</style>

            <section className="product-lines-section" id="product-line">
                {/* Header */}
                <div className="product-lines-header">
                    <span className="product-lines-header-bar" />
                    <h2 className="product-lines-title">Product Lines</h2>
                </div>

                {/* Responsive Grid */}
                <div className="product-lines-grid">
                    {productLines.map((column, colIndex) => (
                        <ul key={colIndex} className="product-lines-column">
                            {column.map((item, itemIndex) => {
                                const itemKey = `${colIndex}-${itemIndex}`;
                                const isHovered = hoveredItem === itemKey;

                                return (
                                    <li
                                        key={itemIndex}
                                        className="product-lines-item"
                                        onMouseEnter={() => setHoveredItem(itemKey)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        {/* Colored bar */}
                                        <span
                                            className="product-lines-bar"
                                            style={{
                                                backgroundColor: item.color,
                                                transform: isHovered ? "scaleY(1.3)" : "scaleY(1)",
                                                opacity: isHovered ? 1 : 0.85,
                                            }}
                                        />
                                        <a href={item.link} className="product-lines-link">
                                            <span
                                                className="product-lines-label"
                                                style={{
                                                    color: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.65)",
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

            <div className="footer-bar">
                <div className="footer-inner">
                    <p className="footer-text">
                        Copyright © 2026 Silverstar Resources Company Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
}