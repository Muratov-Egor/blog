import { Locale } from "@/i18n-config";
import Link from 'next/link';
import { getMarineLifeArticles } from '@/lib/marine-life';

export default async function MarineLifePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const articles = await getMarineLifeArticles(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Marine Life</h1>
      <ul className="space-y-4">
        {articles.map(article => (
          <li key={article.slug}>
            <Link href={`/${lang}/marine-life/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
