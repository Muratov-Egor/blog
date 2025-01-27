import { Locale } from "@/i18n-config";
import { getMarineLifeArticle } from "@/lib/marine-life";
import ArticleContent from "@/app/components/ArticleContent";
import ArticleNotFound from "@/app/components/ArticleNotFound";
import { generateMeta } from "@/app/components/Meta";
import Schema from "@/app/components/Schema";

type Props = {
  params: Promise<{ lang: Locale; slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  const article = await getMarineLifeArticle(lang, slug);

  if (!article) {
    return <ArticleNotFound lang={lang} />;
  }

  return await generateMeta({
    params,
    title: `${article.title} - Diver's Notes`,
    description: article.meta_title,
    openGraphImage: article.image,
    keywords: article.meta_keywords?.join(', ') || 'Underwater life',
    canonicalUrl: `https://divernotes.com/${lang}/marine-life/${slug}`,
  });
}

export default async function MarineLifeArticlePage({
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
    <>
      <Schema 
        type="Article"
        name={article.title}
        url={`https://divernotes.com/${lang}/marine-life/${slug}`}
        description={article.meta_title}
        image={article.image}
      />
      <ArticleContent 
        title={article.title}
        title_en={article.title_en}
        date={article.date}
        image={article.image}
        content={article.content}
        lang={lang}
      />
    </>
  );
}
  