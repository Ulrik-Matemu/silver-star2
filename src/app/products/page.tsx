import ProductHero from "../components/product-hero";
import ProductLinesSection from "../components/product-line";
import ProductsSolutionsSection from "../components/product-solution";
import SolutionsSection from "../components/product-solution-2";
import TechnicalDocumentationSection from "../components/tech-doc";

export default async function ProductsPage() {
    const productLines = [
        {
            title: "Ceramics and Stone Materials",
            image: "/products/product1.jpeg",
            href: "/products/ceramics-stone",
            accentColor: "#2563eb",
        },
        {
            title: "Complementary Products for Installation Work",
            image: "/products/product2.jpeg",
            href: "/products/installation",
            accentColor: "#f59e0b",
        },
        {
            title: "Cleaning, Maintaining and Protecting Surfaces",
            image: "/products/product3.jpeg",
            href: "/products/cleaning-maintaining-protecting",
            accentColor: "#10b981",
        },
        {
            title: "Resilient, LVT and Textile Materials",
            image: "/products/product4.jpeg",
            href: "/products/resilient-lvt-textile-materials",
            accentColor: "#ef4444",
        },
    ];

    return (
        <div>
            <ProductHero
                title="Our Products"
                description="Discover our wide range of high-quality products designed to meet your needs."
                backgroundImage="/bg-hub-prodotti-soluzioni.jpg"
            />
            <ProductsSolutionsSection />
            <ProductLinesSection items={productLines} />
            <SolutionsSection />
            <TechnicalDocumentationSection />
        </div>
    )
}