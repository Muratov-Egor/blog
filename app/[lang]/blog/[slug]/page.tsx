import { Locale } from "@/i18n-config";
import { getBlogArticle } from "@/lib/blog";
import ArticleContent from "@/app/components/ArticleContent";
import ArticleNotFound from "@/app/components/ArticleNotFound";

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const article = await getBlogArticle(lang, slug);

  if (!article) {
    return <ArticleNotFound lang={lang} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ArticleContent 
        title={article.title}
        date={article.date}
        image={article.image}
        content={article.content}
        lang={lang}
      />
    </div>
  );
}
