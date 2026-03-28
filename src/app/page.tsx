import { HeroCarousel } from "./components/hero-caraousel";
import { ProductsSection } from "./components/products-section";
import { WelcomeNote } from "./components/welcome-note";
import { StatsSection } from "./components/stats";
import ProductLines from "./components/product-line-bar";
import ProductSelector from "./components/product-selector";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <WelcomeNote />
      <ProductsSection />
      <ProductLines />
      <ProductSelector />
      <StatsSection />
    </div>
  );
}
