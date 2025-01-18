import { Locale } from "@/i18n-config";
import Link from 'next/link';
import Image from 'next/image';
import { getMarineLifeArticles } from '@/lib/marine-life';
import { Pagination } from "@/app/components/Pagination";
import { calculatePagination } from "@/app/utils/pagination";

export default async function MarineLifePage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { lang } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const articles = await getMarineLifeArticles(lang);
  const itemsPerPage = 9;
  const itemsPerFirstPage = 9;
  const { totalPages, startIndex, endIndex } = calculatePagination(
    articles.length,
    currentPage,
    itemsPerPage,
    itemsPerFirstPage
  );

  const limitedArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Marine Life</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedArticles.map(article => (
          <Link 
            href={`/${lang}/marine-life/${article.slug}`}
            key={article.slug}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="relative w-full pt-[66.67%]">
                <Image
                  src={article.image || '/placeholder-image.jpg'}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                {lang === 'ru' && article.title_en && (
                  <p className="text-gray-600 italic">{article.title_en}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        lang={lang}
        basePath="/marine-life"
      />
    </div>
  );
}
