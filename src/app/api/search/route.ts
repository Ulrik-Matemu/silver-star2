import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { categoryInfo } from '@/app/data/categories';

// Define the types for our data
interface Product {
  id: string;
  name: string;
  line: string;
  description: string;
  imageUrl: string;
  specs: {
    [key: string]: string;
  };
}

interface Category {
  id: string;
  title: string;
  description: string;
}

interface SearchResult {
  type: 'product' | 'category' | 'page';
  url: string;
  title: string;
  description?: string;
}

// Helper function to read and parse the JSON file
async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'products.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const lowerCaseQuery = query.toLowerCase();

  try {
    const products = await getProducts();
    const categories: Category[] = Object.entries(categoryInfo).map(([id, data]) => ({
        id,
        ...data,
      }));

    const productResults: SearchResult[] = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery)
      )
      .map((product) => ({
        type: 'product',
        url: `/products/${product.line}/${product.id}`,
        title: product.name,
        description: product.description,
      }));

    const categoryResults: SearchResult[] = categories
      .filter(
        (category) =>
          category.title.toLowerCase().includes(lowerCaseQuery) ||
          category.description.toLowerCase().includes(lowerCaseQuery)
      )
      .map((category) => ({
        type: 'category',
        url: `/products/${category.id}`,
        title: category.title,
        description: category.description,
      }));
      
    const pageResults: SearchResult[] = [
        {
            type: 'page',
            url: '/',
            title: 'Home',
            description: 'Main page of the website'
        },
        {
            type: 'page',
            url: '/products',
            title: 'Products',
            description: 'Browse all our products'
        },
        {
            type: 'page',
            url: '/solutions',
            title: 'Solutions',
            description: 'Discover our solutions'
        },
        {
            type: 'page',
            url: '/careers',
            title: 'Careers',
            description: 'Join our team'
        },
        {
            type: 'page',
            url: '/contact-us',
            title: 'Contact Us',
            description: 'Get in touch with us'
        }
    ].filter(page => page.title.toLowerCase().includes(lowerCaseQuery) || page.description.toLowerCase().includes(lowerCaseQuery));

    const results = [...pageResults, ...categoryResults, ...productResults];

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error in search API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
