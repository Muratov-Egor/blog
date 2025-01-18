'use client';

import { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { SearchBarProps } from '@/types/search';
import { useSearch } from '@/hooks/useSearch';
import { SearchResults } from './SearchResults';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function SearchBar({ placeholder }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const lang = pathname.split('/')[1] as 'ru' | 'en';
  
  const { results, isLoading, isOpen, setIsOpen } = useSearch(query, lang);
  
  useClickOutside(searchRef, () => setIsOpen(false));

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

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

      <SearchResults 
        results={results}
        lang={lang}
        onResultClick={handleResultClick}
        isOpen={isOpen}
      />
    </div>
  );
} 