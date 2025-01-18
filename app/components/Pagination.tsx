import Link from "next/link";
import { Locale } from "@/i18n-config";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  lang: Locale;
  basePath: string;
}

export function Pagination({ totalPages, currentPage, lang, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
          key={pageNum}
          href={`/${lang}${basePath}${pageNum === 1 ? '' : `?page=${pageNum}`}`}
          className={`px-4 py-2 rounded ${
            currentPage === pageNum
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {pageNum}
        </Link>
      ))}
    </div>
  );
} 