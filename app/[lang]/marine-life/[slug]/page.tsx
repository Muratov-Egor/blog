import { Locale } from "@/i18n-config";
import { getMarineLifeArticle } from "@/lib/marine-life";
import { notFound } from "next/navigation";
import Markdown from 'markdown-to-jsx';

export default async function MarineLifePage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const article = await getMarineLifeArticle(lang, slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="marine-life-article">
        <div>
          <h1>{article.title}</h1>
          {article.image && (
            <img src={article.image} alt={article.title} />
          )}
        </div>
        <div className="markdown-content">
          <Markdown>{article.content}</Markdown>
        </div>
        {article.tags && (
          <footer>
            <div className="tags">
              {article.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </footer>
        )}
      </article>
    </>
  );
}
  