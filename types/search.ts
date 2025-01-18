import { Locale } from '@/i18n-config';

export interface SearchResult {
  title: string;
  path: string;
  category: 'blog' | 'marine-life';
}

export interface SearchBarProps {
  placeholder: string;
}

export type ContentCategory = 'blog' | 'marine-life'; 