import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n-config";

interface ArticleCardProps {
  article: {
    slug: string;
    title: string;
    description: string;
    image?: string;
  };
  isFeature?: boolean;
  lang: Locale;
}

export function ArticleCard({ article, isFeature = false, lang }: ArticleCardProps) {
  return (
    <Link 
      href={`/${lang}/blog/${article.slug}`}
      className={`group block ${isFeature ? 'md:col-span-2' : ''}`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:translate-y-[-4px]">
        <div className={`relative ${isFeature ? 'h-72' : 'h-48'} w-full`}>
          <Image
            src={article.image || '/images/default-image.jpg'}
            alt={article.title}
            fill
            className="object-cover"
            sizes={isFeature ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
          />
        </div>
        <div className="p-6 h-[200px] flex flex-col">
          <h2 className={`font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 ${
            isFeature ? 'text-2xl' : 'text-xl'
          }`}>
            {article.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-4">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
} 