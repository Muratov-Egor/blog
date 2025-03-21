// lib/search.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '../i18n-config';
import { cleanText } from '@/utils/textUtils';
import { SearchResult } from '@/types/search';
function findSearchSnippet(
  text: string,
  query: string,
  title: string,
  titleEn: string
): { before: string; match: string; after: string } {
  const words = text.split(' ');
  const queryWords = query.split(' ');

  if (title.includes(query) || titleEn.includes(query)) {
    return {
      before: '',
      match: title.includes(query) ? title : titleEn,
      after: ''
    };
  }

  for (let i = 0; i < words.length; i++) {
    const slice = words.slice(i, i + queryWords.length).join(' ');
    if (slice.includes(query)) {
      return {
        before: words.slice(Math.max(0, i - 5), i).join(' '),
        match: slice,
        after: words.slice(i + queryWords.length, i + queryWords.length + 5).join(' ')
      };
    }
  }

  return {
    before: '',
    match: query,
    after: ''
  };
}

export function searchContent(query: string, locale: Locale): SearchResult[] {
  if (!query) return [];

  const results: SearchResult[] = [];
  const cleanedQuery = cleanText(query);
  
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

      const cleanedContent = cleanText(content);
      const cleanedTitle = cleanText(data.title);
      const cleanedTitleEn = cleanText(data.title_en || '');

      const searchableContent = `${cleanedTitle} ${cleanedTitleEn} ${cleanedContent}`;
      
      if (searchableContent.includes(cleanedQuery)) {
        const snippet = findSearchSnippet(cleanedContent, cleanedQuery, data.title, data.title_en || '');
        
        results.push({
          title: data.title,
          path: file.replace('.md', ''),
          category: category,
          image: data.image,
          snippet
        });
      }
    });
  });

  return results;
}