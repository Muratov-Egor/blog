import { searchContent } from '@/lib/search';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const lang = searchParams.get('lang') as 'ru' | 'en';

  if (!query || !lang) {
    return NextResponse.json({ results: [] });
  }

  const results = searchContent(query, lang);
  return NextResponse.json({ results });
} 