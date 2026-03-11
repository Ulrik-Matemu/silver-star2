// @src/app/products/[category]/[productSlug]/page.tsx

import Link from 'next/link';
import products from '@/app/data/products.json';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ category: string, productSlug: string }> }) {
    const { category, productSlug } = await params;
    const product = products.find(p => p.id === productSlug);

    if (!product) notFound();

    return (
        <div className="bg-white min-h-screen font-sans antialiased">
            {/* Subtle Top Progress/Breadcrumb */}
            <div className="border-b border-gray-100">
                <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                    <Link href="/products" className="hover:text-black transition-colors">PRODUCTS</Link>
                    <span>/</span>
                    <Link href={`/products/${category}`} className="hover:text-black transition-colors">{category.replace('-', ' ')}</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-semibold">{product.name}</span>
                </nav>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className='flex gap-12 lg:gap-24 items-start'>
                        <div className="">
                            <div className="relative bg-[#f9f9f9] rounded-2xl p-8 md:p-12 aspect-[4/5] flex items-center justify-center overflow-hidden border border-gray-50">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={400}
                                    height={500}
                                    className="object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Info Section (7 Columns) */}
                        <div className="lg:col-span-7 flex flex-col">
                            <div className="space-y-2 mb-8">
                                <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Silverstar Professional</span>
                                <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                                    {product.name}
                                </h1>
                            </div>

                            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
                                {product.description}
                            </p>

                            {/* Tech Specs: The "Elegant" Grid */}
                            <div className="border-t border-gray-100 pt-8 mb-10">
                                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">Technical Specifications</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <div key={key} className="group">
                                            <dt className="text-[11px] uppercase text-gray-400 mb-1 group-hover:text-blue-500 transition-colors capitalize">{key}</dt>
                                            <dd className="text-base text-gray-800 font-medium">{value}</dd>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}