import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getBlogArticles } from "@/lib/blog";
import { getDictionary } from "@/get-dictionary";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const articles = await getBlogArticles(lang);
  const t = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center border-b border-gray-200 pb-2 mb-10">
        <h1 className="text-3xl font-bold mb-2">{t.blog.title}</h1>
        <span className="text-sm text-gray-500 mb-6 text-center">{t.blog.description}</span>
      </div>
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
