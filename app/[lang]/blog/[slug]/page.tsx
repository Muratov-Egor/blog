import { Locale } from "@/i18n-config";
import { getBlogArticle } from "@/lib/blog";
import ArticleContent from "@/app/components/ArticleContent";
import ArticleNotFound from "@/app/components/ArticleNotFound";
import { generateMeta } from "@/app/components/Meta";


type Props = {
  params: Promise<{ lang: Locale; slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  const article = await getBlogArticle(lang, slug);

  if (!article) {
    return <ArticleNotFound lang={lang} />;
  }

  return await generateMeta({
    params,
    title: `${article.title} - Diver's Notes`,
    description: article.meta_title,
    openGraphImage: article.image,
    keywords: article.meta_keywords?.join(', ') || 'Underwater life',
  });
}

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
