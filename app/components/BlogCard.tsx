"use client";

import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { useState } from "react";

interface BlogCardProps {
  article: {
    slug: string;
    title: string;
    description: string;
    image?: string;
  };
  isFeature?: boolean;
  lang: Locale;
}

export function BlogCard({ article, isFeature = false, lang }: BlogCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      href={`/${lang}/blog/${article.slug}`}
      className={`group block ${isFeature ? 'md:col-span-2' : ''}`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:translate-y-[-4px]">
        <div className={`relative ${isFeature ? 'h-96' : 'h-64'} w-full`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 rounded-full animate-spin" />
            </div>
          )}
          <Image
            src={article.image || '/images/default-image.jpg'}
            alt={article.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes={isFeature ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
        <div className="p-6 h-[200px] flex flex-col text-center">
          <h2 className={`font-semibold mb-3 mt-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200 line-clamp-2 ${
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
