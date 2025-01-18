import { Locale } from "@/i18n-config";
import Link from 'next/link';
import { getMarineLifeArticles } from '@/lib/marine-life';
import Header from "@/app/components/Header/Header";

export default async function MarineLifePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const articles = await getMarineLifeArticles(lang);

  return (
    <div>
      <Header lang={lang} />
      <h1>Marine Life</h1>
      <ul>
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
