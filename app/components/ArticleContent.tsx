"use client";

import { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import ImageModal from './ImageModal';
import ArticleImage from './ArticleImage';
import { Locale } from '@/i18n-config';

interface ArticleContentProps {
  title: string;
  date: string;
  content: string;
  image?: string;
  lang: Locale;
}

export default function ArticleContent({ title, date, content, image, lang }: ArticleContentProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <article className="blog-article">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
          <div className="flex items-center text-gray-600 mb-8 justify-center">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {image && (
            <div className="relative aspect-[16/9] mb-8">
              <ArticleImage
                src={image}
                alt={title}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          )}
        </header>
        
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
                      className="rounded-lg shadow-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage({ src, alt })}
                    />
                  )
                },
                blockquote: {
                  props: {
                    className: "border-l-4 border-blue-500 pl-4 my-4 italic bg-gray-50 p-4 rounded"
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