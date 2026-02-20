import { HeaderNav } from "./components/header-nav";
import { HeroCarousel } from "./components/hero-caraousel";
import { Footer } from "./components/footer";
import { ProductsSection } from "./components/products-section";

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <HeroCarousel />
      <ProductsSection />
     <Footer />
    </div>
  );
}
