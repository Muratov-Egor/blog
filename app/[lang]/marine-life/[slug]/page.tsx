import { Locale } from "@/i18n-config";
import { getMarineLifeArticle } from "@/lib/marine-life";
import { notFound } from "next/navigation";
import ArticleContent from "@/app/components/ArticleContent";

export default async function MarineLifePage({
    params,
  }: {
    params: Promise<{ lang: Locale; slug: string }>;
  }) {
    const { lang, slug } = await params;
    const article = await getMarineLifeArticle(lang, slug);
  

  if (!article) {
    return <div className="container mx-auto px-4 py-8">Article not found</div>;
  }

  return (
    <ArticleContent 
      title={article.title}
      date={article.date}
      image={article.image}
      content={article.content}
      lang={lang}
    />
  );
}
  