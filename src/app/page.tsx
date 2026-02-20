import { HeaderNav } from "./components/header-nav";
import { HeroCarousel } from "./components/hero-caraousel";
import { Footer } from "./components/footer";
import { ProductsSection } from "./components/products-section";
import { WelcomeNote } from "./components/welcome-note";
import { StatsSection } from "./components/stats";

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <HeroCarousel />
      <WelcomeNote />
      <ProductsSection />
      <StatsSection />
     <Footer />
    </div>
  );
}
