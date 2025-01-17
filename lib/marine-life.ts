import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '../i18n-config';

interface MarineLifeArticle {
  slug: string;
  title: string;
  content: string;
  meta_title: string;
  image?: string;
  tags?: string[];
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
      title: data.title
    };
  });

  return articles;
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
      content,
      meta_title: data.meta_title,
      image: data.image,
      tags: data.tags,
    };
  } catch (error) {
    return null;
  }
} 