"use client";

import { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import ImageModal from './ImageModal';
import ArticleImage from './ArticleImage';
import { Locale } from '@/i18n-config';

interface ArticleContentProps {
  title: string;
  title_en?: string;
  description?: string;
  date: string;
  content: string;
  image?: string;
  lang: Locale;
}

export default function ArticleContent({ title, title_en, description, date, content, image, lang }: ArticleContentProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <article className="blog-article">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mt-0 mb-4 text-center">{title}</h1>
          {description && <span className="block text-sm font-bold mb-4 text-center text-gray-600 dark:text-gray-300">{description}</span>}
          {title_en && <span className="block text-sm font-bold mb-4 text-center text-gray-600 dark:text-gray-300">{title_en}</span>}
          <div className="flex items-center text-gray-600 mb-8 justify-center dark:text-gray-300">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {image && (
            <div className="relative aspect-[16/9] mb-8 bg-gray-100 dark:bg-gray-100 rounded-lg">
              <ArticleImage
                src={image}
                alt={title}
                className="rounded-lg shadow-lg object-cover w-full cursor-pointer hover:opacity-90 transition-opacity "
                onClick={() => setSelectedImage({ src: image, alt: title })}
              />
            </div>
          )}
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <Markdown
            options={{
              overrides: {
                img: {
                  component: ({ alt, src, title }) => (
                    <ArticleImage
                      src={src}
                      alt={alt}
                      title={title}
                      className="rounded-lg shadow-lg w-full cursor-pointer hover:opacity-90 transition-opacity bg-white dark:bg-gray-100"
                      onClick={() => setSelectedImage({ src, alt })}
                    />
                  )
                },
                blockquote: {
                  props: {
                    className: "border-l-4 border-blue-500 pl-4 my-4 italic bg-gray-50 p-4 rounded bg-gray-100 dark:bg-gray-800"
                  }
                },
                YouTube: {
                  component: ({ id }) => (
                    <div className="my-8 aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src={`https://www.youtube.com/embed/${id}`}
                        allowFullScreen
                      />
                    </div>
                  )
                }
              }
            }}
          >
            {content}
          </Markdown>
        </div>

        {selectedImage && (
          <ImageModal
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </article>
  );
}
