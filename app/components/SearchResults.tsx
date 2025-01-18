import { SearchResult } from '@/types/search';
import Link from 'next/link';

interface SearchResultsProps {
  results: SearchResult[];
  lang: string;
  onResultClick: () => void;
  isOpen: boolean;
}

export function SearchResults({ results, lang, onResultClick, isOpen }: SearchResultsProps) {
  if (!isOpen || results.length === 0) return null;

  return (
    <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                    border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
      <ul className="py-1">
        {results.map((result, index) => (
          <li key={index}>
            <Link 
              href={`/${lang}/${result.category}/${result.path}`}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                       hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={onResultClick}
            >
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 