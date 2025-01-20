import { SearchResult } from '@/types/search';
import Link from 'next/link';
import Image from 'next/image';

interface SearchResultsProps {
  results: SearchResult[];
  lang: string;
  onResultClick: () => void;
  isOpen: boolean;
}

export function SearchResults({ results, lang, onResultClick, isOpen }: SearchResultsProps) {
  if (!isOpen || results.length === 0) return null;

  const getCategoryName = (category: string, lang: string) => {
    if (lang === 'ru') {
      return category === 'blog' ? 'Блог' : 'Подводный мир';
    }
    return category === 'blog' ? 'Blog' : 'Marine Life';
  };

  return (
    <div className="absolute z-50 w-64 lg:w-96 md:w-96 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                    border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-y-auto
                    lg:left-0 lg:transform lg:-translate-x-1/2
                    md:left-1/2 md:transform md:-translate-x-1/2">
      <ul className="py-1">
        {results.map((result, index) => (
          <li key={index}>
            <Link 
              href={`/${lang}/${result.category}/${result.path}`}
              className="flex gap-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={onResultClick}
            >
              {/* Изображение */}
              <div className="flex-shrink-0">
                {result.image ? (
                  <Image
                    src={result.image}
                    alt={result.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-[60px] h-[60px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
                )}
              </div>

              {/* Контент */}
              <div className="flex-grow min-w-0">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {result.title}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  {getCategoryName(result.category, lang)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {result.snippet.before && (
                    <span className="text-gray-500">...{result.snippet.before} </span>
                  )}
                  <span className="font-bold whitespace-nowrap">{result.snippet.match}</span>
                  {result.snippet.after && (
                    <span className="text-gray-500"> {result.snippet.after}...</span>
                  )}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 