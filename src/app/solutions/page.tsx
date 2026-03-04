import ProductHero from "../components/product-hero";
import SolutionsSection from "../components/product-solution-2";
import SolutionsGrid from "../components/solutions-grid";

export default async function SolutionsPage() {
    return (
        <>
        <ProductHero
            title="Our Solutions"
            description="Explore our innovative solutions designed to meet your specific needs and challenges."
            backgroundImage="/soluzioni-hub.jpg"
        />
        <SolutionsSection />
        <SolutionsGrid />
        </>
    );
}