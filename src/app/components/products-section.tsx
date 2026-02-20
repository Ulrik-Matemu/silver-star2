import Image from 'next/image';

// Updated interface with more metadata for the "improved" look
interface Product {
  title: string;
  image: string;
  accentColor: string;
  category: string;
}

const products: Product[] = [
  { title: "Ceramics and Stone", category: "Adhesives", image: "/products/product1.jpeg", accentColor: "bg-amber-400" },
  { title: "Installation Products", category: "Mortars", image: "/products/product2.jpeg", accentColor: "bg-amber-400" },
  { title: "Surface Protection", category: "Sealants", image: "/products/product3.jpeg", accentColor: "bg-slate-400" },
  { title: "Textile Materials", category: "Flooring", image: "/products/product4.jpeg", accentColor: "bg-rose-500" },
  { title: "Sports Flooring", category: "Athletic", image: "/products/product5.jpeg", accentColor: "bg-rose-500" },
];

export const ProductsSection = () => {
  return (
    <section className="py-10 px-6 bg-white">
        <h2 className="text-center text-3xl font-bold mb-6">OUR PRODUCTS</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[250px] w-full overflow-hidden rounded-xl bg-slate-200"
            >
              {/* Image with subtle zoom */}
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                fill
              />

              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80" />

              {/* Content Box with Glassmorphism */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-500">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-lg shadow-xl">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1 block">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-8 rounded-full ${item.accentColor}`} />
                    <h3 className="text-sm font-extrabold leading-tight text-white uppercase italic tracking-tighter">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Subtle "Arrow" hint on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/40">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};