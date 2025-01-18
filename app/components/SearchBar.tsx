'use client';

import { useState, useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SearchBarProps {
  placeholder: string;
}

interface SearchResult {
  title: string;
  path: string;
  category: 'blog' | 'marine-life';
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  const lang = pathname.split('/')[1] as 'ru' | 'en';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Добавляем debounce для поисковых запросов
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${lang}`);
          const data = await response.json();
          setResults(data.results);
          setIsOpen(true);
        } catch (error) {
          console.error('Search error:', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300); // Задержка в 300мс

    return () => clearTimeout(timer);
  }, [query, lang]);

  return (
    <div className="relative" ref={searchRef}>
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full lg:w-40 py-1 pl-10 pr-4 rounded-full border border-gray-300 
                 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                 transition-all duration-200 text-sm
                 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200
                 dark:focus:border-blue-400 dark:focus:ring-blue-400"
      />
      <FiSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5
                          ${isLoading ? 'text-blue-500 animate-spin' : 'text-gray-400'}`} />

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                      border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
          <ul className="py-1">
            {results.map((result, index) => (
              <li key={index}>
                <Link 
                  href={`/${lang}/${result.category}/${result.path}`}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                           hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                >
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 