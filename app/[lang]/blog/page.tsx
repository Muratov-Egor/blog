import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { getBlogArticles } from "@/lib/blog";
import { getDictionary } from "@/get-dictionary";

const ITEMS_PER_FIRST_PAGE = 5;
const ITEMS_PER_PAGE = 6;

export default async function IndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Locale }>;
  searchParams: { page?: string };
}) {
  const { lang } = await params;
  const currentPage = Number(searchParams.page) || 1;
  const t = await getDictionary(lang);
  
  // Получаем все статьи для подсчета общего количества
  const allArticles = await getBlogArticles(lang);
  const totalArticles = allArticles.length;
  
  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(
    (totalArticles - ITEMS_PER_FIRST_PAGE) / ITEMS_PER_PAGE + 1
  );

  // Вычисляем статьи для текущей страницы
  const startIndex = currentPage === 1 
    ? 0 
    : ITEMS_PER_FIRST_PAGE + (currentPage - 2) * ITEMS_PER_PAGE;
    
  const endIndex = currentPage === 1 
    ? ITEMS_PER_FIRST_PAGE 
    : startIndex + ITEMS_PER_PAGE;

  const articles = allArticles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center border-b border-gray-200 pb-2 mb-10">
        <h1 className="text-3xl font-bold mb-2">{t.blog.title}</h1>
        <span className="text-sm text-gray-500 mb-6 text-center">{t.blog.description}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <Link 
            href={`/${lang}/blog/${article.slug}`}
            key={article.slug}
            className={`group block ${currentPage === 1 && index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:translate-y-[-4px]">
              <div className={`relative ${currentPage === 1 && index === 0 ? 'h-96' : 'h-56'} w-full`}>
                <Image
                  src={article.image || '/images/default-image.jpg'}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes={currentPage === 1 && index === 0 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                />
              </div>
              <div className="p-6">
                <h2 className={`font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 ${
                  currentPage === 1 && index === 0 ? 'text-2xl' : 'text-xl'
                }`}>
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {article.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/${lang}/blog${pageNum === 1 ? '' : `?page=${pageNum}`}`}
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
      )}
    </div>
  );
}
