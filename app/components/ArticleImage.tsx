"use client";

import { useState } from 'react';

interface ArticleImageProps {
  src: string;
  alt: string;
  title?: string;
  onClick?: () => void;
  className?: string;
}

export default function ArticleImage({ src, alt, title, onClick, className = "" }: ArticleImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <figure className="my-8">
      <div className={`relative ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onClick={onClick}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      {title && (
        <figcaption className="text-center text-gray-600 mt-2">
          {title}
        </figcaption>
      )}
    </figure>
  );
} 