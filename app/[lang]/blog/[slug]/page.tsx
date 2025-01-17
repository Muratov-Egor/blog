import { Locale } from "../../../../i18n-config";
import { getBlogArticle } from "../../../../lib/blog";
import { notFound } from "next/navigation";
import Markdown from 'markdown-to-jsx';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const article = await getBlogArticle(lang, slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="blog-article">
      <header>
        <h1>{article.title}</h1>
        {article.image && (
          <img src={article.image} alt={article.title} />
        )}
      </header>
      <div className="markdown-content">
        <Markdown>{article.content}</Markdown>
      </div>
    </article>
  );
}
  