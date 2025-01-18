import { Locale } from "@/i18n-config";
import { getBlogArticle } from "@/lib/blog";
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
    <>
      <article className="blog-article">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">{article.title}</h1>
            <div className="flex items-center text-gray-600 mb-8 justify-center">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString(lang, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            {article.image && (
              <div className="relative aspect-[16/9] mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            )}
          </header>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <Markdown
              options={{
                overrides: {
                  img: {
                    component: ({ alt, src, title }) => (
                      <figure className="my-8">
                        <img
                          src={src}
                          alt={alt}
                          className="rounded-lg shadow-lg w-full"
                        />
                        {title && (
                          <figcaption className="text-center text-gray-600 mt-2">
                            {title}
                          </figcaption>
                        )}
                      </figure>
                    )
                  },
                  blockquote: {
                    props: {
                      className: "border-l-4 border-blue-500 pl-4 my-4 italic bg-gray-50 p-4 rounded"
                    }
                  },
                  YouTube: {
                    component: ({ id }) => (
                      <div className="my-8 aspect-video">
                        <iframe
                          className="w-full h-full rounded-lg shadow-lg"
                          src={`https://www.youtube.com/embed/${id}`}
                          allowFullScreen
                        />
                      </div>
                    )
                  }
                }
              }}
            >
              {article.content}
            </Markdown>
          </div>
        </div>
      </article>
    </>
  );
}
  