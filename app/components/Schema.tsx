import React from 'react';

type SchemaProps = {
  type: string; // Тип Schema (например, WebSite, Article и т.д.)
  name: string; // Название
  url: string; // URL страницы
  description?: string; // Описание (опционально)
  image?: string; // Изображение (опционально)
};

const Schema = ({ type, name, url, description, image }: SchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "url": url,
    ...(description && { "description": description }), // Добавляем описание, если оно есть
    ...(image && { "image": image }), // Добавляем изображение, если оно есть
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
};

export default Schema; 