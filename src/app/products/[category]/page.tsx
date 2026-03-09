import Link from 'next/link';
import products from '@/app/data/products.json';
import { notFound } from 'next/navigation';
import { categoryInfo } from '@/app/data/categories';
import CleanProductHero from '@/app/components/clean-product-hero';
import Image from 'next/image';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;

    // 1. Filter products belonging to this category
    const filteredProducts = products.filter((p) => p.line === category);

    // Mapping for Category Descriptions (You can move this to a separate file later)


    // 2. Get category details (using the mapping above)
    const info = categoryInfo[category];

    // If no products exist for this category, trigger a 404
    if (filteredProducts.length === 0) {
        notFound();
    }

    return (
        <div>
            <CleanProductHero
                title={info?.title || category.replace('-', ' ')}
                description={info?.description || `Explore our high-quality range of Mapei ${category.replace('-', ' ')} solutions.`}
            />
            <div className='px-4'>
                <h2 className="text-3xl font-extrabold text-center py-8">{info?.subTitle || ''}</h2>
                <p className="text-justify text-2xl text-gray-600 px-12">{info?.extraDescription || ''}</p>
            </div>
            <div className='px-12 py-12'>
                <h3 className="text-3xl font-bold text-left mb-4">Explore Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${category}/${product.id}`}
                            className="group block border rounded-lg p-6 hover:shadow-xl transition-shadow border-gray-200"
                        >
                            <div className="aspect-square bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mt-2">
                                {product.description}
                            </p>
                            <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
                                View Technical Specs →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}