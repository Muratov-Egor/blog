import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n-config";

interface MarineLifeCardProps {
  article: {
    slug: string;
    image?: string;
    title: string;
    title_en?: string;
  };
  lang: Locale;
}

export default function MarineLifeCard({ article, lang }: MarineLifeCardProps) {
  return (
    <Link 
      href={`/${lang}/marine-life/${article.slug}`}
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
  );
}

