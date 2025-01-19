import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '../i18n-config';

interface BlogArticle {
  slug: string;
  title: string;
  title_en?: string;
  description: string;
  content: string;
  meta_title: string;
  meta_keywords?: string[];
  image?: string;
  date: string;
}

export async function getBlogArticles(locale: Locale): Promise<BlogArticle[]> {
  const folder = path.join(process.cwd(), 'content/blog', locale);
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
      image: data.image,
      description: data.description
    };
  });

  // Сортируем статьи по дате (от новых к старым)
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ) as BlogArticle[];
}

export async function getBlogArticle(locale: Locale, slug: string): Promise<BlogArticle | null> {
  const folder = path.join(process.cwd(), 'content/blog', locale);
  const filePath = path.join(folder, `${slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title,
      description: data.description,
      content,
      meta_title: data.meta_title,
      image: data.image,
      date: data.date,
      meta_keywords: data.meta_keywords,
    };
  } catch (error) {
    return null;
  }
} 