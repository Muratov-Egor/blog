import Link from "next/link";
import { Locale } from "@/i18n-config";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  lang: Locale;
  basePath: string;
}

export function Pagination({ totalPages, currentPage, lang, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (pageNum: number) => {
    return `/${lang}${basePath}${pageNum === 1 ? '' : `?page=${pageNum}`}`;
  };

  const getVisiblePages = () => {
    const delta = 1; // Number of pages to show on each side of current page
    let pages = [];

    pages.push(1);

    let leftBound = Math.max(2, currentPage - delta);
    let rightBound = Math.min(totalPages - 1, currentPage + delta);

    if (currentPage - delta > 2) {
      pages.push(-1); // Add ellipsis
    }

    for (let i = leftBound; i <= rightBound; i++) {
      pages.push(i);
    }

    if (currentPage + delta < totalPages - 1) {
      pages.push(-2);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-3 py-2 no-underline rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center"
          aria-label="Previous page"
        >
          <FiChevronLeft />
        </Link>
      )}

      {visiblePages.map((pageNum) => {
        if (pageNum < 0) {
          return (
            <span
              key={pageNum}
              className="px-4 py-2 text-gray-500 dark:text-gray-400"
            >
              ...
            </span>
          );
        }

        return (
          <Link
            key={pageNum}
            href={getPageUrl(pageNum)}
            className={`px-4 py-2 no-underline rounded ${
              currentPage === pageNum
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-current={currentPage === pageNum ? "page" : undefined}
          >
            {pageNum}
          </Link>
        );
      })}
      
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-3 py-2 no-underline rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center"
          aria-label="Next page"
        >
          <FiChevronRight />
        </Link>
      )}
    </div>
  );
}
