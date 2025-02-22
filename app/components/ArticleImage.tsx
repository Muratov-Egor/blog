"use client";

import { useState } from 'react';
import { modifyCloudinaryUrl } from '../utils/resizeUrl';

interface ArticleImageProps {
  src: string;
  alt: string;
  title?: string;
  onClick?: () => void;
  className?: string;
}




export default function ArticleImage({ src, alt, title, onClick, className = "" }: ArticleImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const resizedImage = modifyCloudinaryUrl({url: src})


  return (
    <figure className="my-8">
      <div className={`relative ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
        <img
          src={resizedImage}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onClick={onClick}
          onLoad={() => setIsLoading(false)}
          loading='lazy'
        />
      </div>
      {title && (
        <figcaption className="text-center text-gray-600 mt-2 dark:text-gray-300">
          {title}
        </figcaption>
      )}
    </figure>
  );
} 