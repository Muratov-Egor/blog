import { Locale } from "@/i18n-config";
import { getBlogArticle } from "@/lib/blog";
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
  const article = await getBlogArticle(lang, slug);

  if (!article) {
    return <ArticleNotFound lang={lang} />;
  }

  return await generateMeta({
    params,
    title: `${article.title} - Diver's Notes`,
    description: article.meta_title,
    openGraphImage: article.image,
    keywords: article.meta_keywords?.join(', ') || 'Blog, Diving, Scuba diving, Diving blog, Diving tips, Diving gear, Diving destinations, Diving adventures, Diving stories, Diving experiences, Diving tips and tricks, Diving destinations, Diving adventures, Diving stories, Diving experiences, Diving tips and tricks, Diving destinations, Diving adventures, Diving stories, Diving experiences, Diving tips and tricks',
    canonicalUrl: `https://divernotes.com/${lang}/blog/${slug}`,
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
    <>
      <Schema 
        type="Article"
        name={article.title}
        url={`https://divernotes.com/${lang}/blog/${slug}`}
        description={article.meta_title}
        image={article.image}
      />
      <ArticleContent 
        title={article.title}
        date={article.date}
        image={article.image}
        content={article.content}
        lang={lang}
      />
    </>
  );
}
