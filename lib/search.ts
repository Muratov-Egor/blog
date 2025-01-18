// lib/search.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '../i18n-config';

interface SearchResult {
  title: string;
  path: string;
  category: 'blog' | 'marine-life';
}

export function searchContent(query: string, locale: Locale): SearchResult[] {
  if (!query) return [];

  const results: SearchResult[] = [];
  
  // Определяем категории для поиска
  const categories = ['blog', 'marine-life'] as const;

  categories.forEach(category => {
    const dir = path.join(process.cwd(), 'content', category, locale);
    
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach(file => {
      if (!file.endsWith('.md')) return;

      const fullPath = path.join(dir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const searchableContent = `${data.title} ${content}`.toLowerCase();
      
      if (searchableContent.includes(query.toLowerCase())) {
        results.push({
          title: data.title,
          path: file.replace('.md', ''),
          category: category
        });
      }
    });
  });

  return results;
}