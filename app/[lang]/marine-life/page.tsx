import { Locale } from "@/i18n-config";
import Link from 'next/link';
import Image from 'next/image';
import { getMarineLifeArticles } from '@/lib/marine-life';
import { Pagination } from "@/app/components/Pagination";
import { calculatePagination } from "@/app/utils/pagination";
import MarineLifeCard from "@/app/components/MarineLifeCard";
import { getDictionary } from "@/get-dictionary";
import { generateMeta } from "@/app/components/Meta";

type Props = {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return await generateMeta({
    params,
    title: t.metadata.marineLife.title,
    description: t.metadata.marineLife.description,
    keywords: t.metadata.marineLife.keywords.join(', '),
    openGraphImage: '/images/og-marine-life.png',
  });
}

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
  const t = await getDictionary(lang);
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
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="flex flex-col items-center border-b border-gray-200 pb-2 mb-10">
        <h1 className="text-3xl font-bold mb-2">{t.marineLife.title}</h1>
        <span className="text-sm text-gray-500 mb-6 text-center">{t.marineLife.description}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedArticles.map(article => (
          <MarineLifeCard 
            article={article}
            lang={lang}
            key={article.slug}
          />
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
