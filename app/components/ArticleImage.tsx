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
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(modifyCloudinaryUrl({url: src}));

  const handleImageError = () => {
    setError(true);
    setTimeout(() => {
      setImageSrc(modifyCloudinaryUrl({url: src}));
      setError(false);
    }, 2000);
  };

  return (
    <figure className="my-8">
      <div className={`relative ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onClick={onClick}
          onLoad={() => setIsLoading(false)}
          onError={handleImageError}
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
