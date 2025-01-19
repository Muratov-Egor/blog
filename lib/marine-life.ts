import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '../i18n-config';

interface MarineLifeArticle {
  slug: string;
  title: string;
  content: string;
  meta_title: string;
  title_en?: string;
  image?: string;
  tags?: string[];
  date: string;
  meta_keywords?: string[];
}

export async function getMarineLifeArticles(locale: Locale): Promise<MarineLifeArticle[]> {
  const folder = path.join(process.cwd(), 'content/marine-life', locale);
  const files = fs.readdirSync(folder);
  
  const articles = files.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(folder, filename),
      'utf-8'
    );
    const { data } = matter(fileContent);
    
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      title_en: data.title_en,
      image: data.image,
    };
  });

  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ) as MarineLifeArticle[];
}

export async function getMarineLifeArticle(locale: Locale, slug: string): Promise<MarineLifeArticle | null> {
  const folder = path.join(process.cwd(), 'content/marine-life', locale);
  const filePath = path.join(folder, `${slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      meta_title: data.meta_title,
      image: data.image,
      tags: data.tags,
      meta_keywords: data.meta_keywords,
    };
  } catch (error) {
    return null;
  }
} 