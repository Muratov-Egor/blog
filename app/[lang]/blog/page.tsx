import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getBlogArticles } from "@/lib/blog";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const articles = await getBlogArticles(lang);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map(article => (
          <li key={article.slug}>
            <Link href={`/${lang}/blog/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
