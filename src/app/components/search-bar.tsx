"use client";

import { useState, useEffect, useCallback } from 'react';
import { Search, X, FileText, Package, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface SearchResult {
  type: 'product' | 'category' | 'page';
  url: string;
  title: string;
  description?: string;
}

export const SearchBar = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length > 2) {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/search?q=${searchQuery}`);
        setResults(response.data);
        setActiveIndex(-1);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
      setIsLoading(false);
    } else {
      setResults([]);
    }
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      handleSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query, handleSearch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prevIndex) => (prevIndex + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length);
      } else if (e.key === 'Enter' && results.length > 0 && activeIndex >= 0) {
        e.preventDefault();
        router.push(results[activeIndex].url);
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, results, router, onClose]);

  const getIcon = (type: SearchResult['type'], isActive: boolean) => {
    const iconClass = isActive ? "text-black" : "text-gray-500";
    switch (type) {
      case 'product':
        return <Package className={iconClass} />;
      case 'category':
        return <Lightbulb className={iconClass} />;
      case 'page':
        return <FileText className={iconClass} />;
      default:
        return <FileText className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: -20 }}
        className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="text-gray-400 mr-3 flex-shrink-0" size={22} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full text-lg text-black outline-none bg-transparent"
            autoFocus
          />
          {isLoading && <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>}
        </div>

        {results.length > 0 && (
          <ul className="py-2 max-h-[60vh] overflow-y-auto">
            {results.map((result, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`px-4 py-3 cursor-pointer transition-colors ${index === activeIndex
                    ? 'bg-blue-500'
                    : 'hover:bg-gray-100'
                  }`}
                onClick={() => {
                  router.push(result.url);
                  onClose();
                }}
              >
                <div className="flex items-center gap-4">
                  <div>{getIcon(result.type, index === activeIndex)}</div>
                  <div>
                    <div className={`font-semibold ${index === activeIndex ? 'text-black' : 'text-gray-800'}`}>
                      {result.title}
                    </div>
                    {result.description && (
                      <p className={`text-sm ${index === activeIndex ? 'text-blue-100' : 'text-gray-500'}`}>
                        {result.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {query.length > 2 && !isLoading && results.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            <p>No results found for &quot;{query}&quot;</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
