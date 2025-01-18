import { Locale } from "@/i18n-config";
import { getMarineLifeArticle } from "@/lib/marine-life";
import ArticleContent from "@/app/components/ArticleContent";
import ArticleNotFound from "@/app/components/ArticleNotFound";

export default async function MarineLifePage({
    params,
  }: {
    params: Promise<{ lang: Locale; slug: string }>;
  }) {
    const { lang, slug } = await params;
    const article = await getMarineLifeArticle(lang, slug);
  

  if (!article) {
    return <ArticleNotFound lang={lang} />;
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
  