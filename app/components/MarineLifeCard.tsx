"use client";

import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link 
      href={`/${lang}/marine-life/${article.slug}`}
      className="block"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="relative w-full pt-[66.67%]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
            </div>
          )}
          <Image
            src={article.image || '/placeholder-image.jpg'}
            alt={article.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
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

