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

export default function ProductLinesRedesign() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <section className="pl-container">
            <style>{`
                .pl-container {
                    background-color: #F9FAFB;
                    padding: 80px 24px;
                    font-family: 'DM Sans', sans-serif;
                }

                .pl-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .pl-header {
                    margin-bottom: 48px;
                    text-align: center;
                }

                .pl-header-tag {
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #888;
                    margin-bottom: 8px;
                }

                .pl-header-title {
                    font-size: 32px;
                    font-weight: 500;
                    color: #111;
                    letter-spacing: -0.02em;
                }

                .pl-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                }

                @media (max-width: 1024px) {
                    .pl-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 640px) {
                    .pl-grid { grid-template-columns: 1fr; }
                    .pl-header-title { font-size: 24px; }
                }

                .pl-column {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .pl-item-wrap {
                    position: relative;
                    margin-bottom: 4px;
                }

                .pl-link {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 12px;
                    text-decoration: none;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    background: transparent;
                }

                .pl-link:hover {
                    background: #ffffff;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
                }

                .pl-indicator {
                    width: 4px;
                    height: 16px;
                    border-radius: 2px;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }

                .pl-link:hover .pl-indicator {
                    transform: scaleY(1.8);
                }

                .pl-label {
                    font-size: 14px;
                    line-height: 1.4;
                    font-weight: 500;
                    color: #444;
                    transition: color 0.2s ease;
                }

                .pl-link:hover .pl-label {
                    color: #000;
                }
                
                .bottom-line {
                    height: 2px;
                    margin-top: 50px;
                    margin-right: 150px;
                    margin-left: 150px;
                }
            `}</style>

            <div className="pl-content">
                <header className="pl-header">
                    <span className="pl-header-tag">Solutions</span>
                    <h2 className="pl-header-title">Explore Our Product Lines</h2>
                </header>

                <div className="pl-grid">
                    {productLines.map((column, colIndex) => (
                        <ul key={colIndex} className="pl-column">
                            {column.map((item, itemIndex) => {
                                const itemKey = `${colIndex}-${itemIndex}`;
                                return (
                                    <li key={itemIndex} className="pl-item-wrap">
                                        <a href={item.link} className="pl-link">
                                            <span 
                                                className="pl-indicator" 
                                                style={{ backgroundColor: item.color }}
                                            />
                                            <span className="pl-label">{item.label}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="bottom-line bg-gray-300"></div>
        </section>
    );
}