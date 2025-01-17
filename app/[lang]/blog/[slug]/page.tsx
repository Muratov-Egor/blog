import { Locale } from "@/i18n-config";
import { getBlogArticle } from "@/lib/blog";
import { notFound } from "next/navigation";
import Markdown from 'markdown-to-jsx';
import Header from "@/app/components/Header";
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
    <>
      <Header lang={lang} />
      <article className="blog-article">
        <div>
          <h1>{article.title}</h1>
          {article.image && (
            <img src={article.image} alt={article.title} />
          )}
        </div>
        <div className="markdown-content">
          <Markdown>{article.content}</Markdown>
        </div>
      </article>
    </>
  );
}
  