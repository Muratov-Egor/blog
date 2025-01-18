import { Locale } from "@/i18n-config";
import { getBlogArticles } from "@/lib/blog";
import { getDictionary } from "@/get-dictionary";
import { calculatePagination } from "@/app/utils/pagination";
import { ArticleCard } from "@/app/components/blog/ArticleCard";
import { Pagination } from "@/app/components/Pagination";

export default async function IndexPage({
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
  
  const allArticles = await getBlogArticles(lang);
  const { totalPages, startIndex, endIndex } = calculatePagination(
    allArticles.length,
    currentPage
  );

  const articles = allArticles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center border-b border-gray-200 pb-2 mb-10">
        <h1 className="text-3xl font-bold mb-2">{t.blog.title}</h1>
        <span className="text-sm text-gray-500 mb-6 text-center">{t.blog.description}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            article={article}
            isFeature={currentPage === 1 && index === 0}
            lang={lang}
          />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        lang={lang}
      />
    </div>
  );
}
