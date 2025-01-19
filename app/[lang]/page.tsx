import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { DIVE_STATS } from "@/lib/dive-sites";
import Image from "next/image";
import { generateMeta } from "@/app/components/Meta";
import Link from "next/link";

type Props = {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ page?: string }>;
};


export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return await generateMeta({
    params,
    title: t.metadata.home.title,
    description: t.metadata.home.description,
    keywords: t.metadata.home.keywords.join(', '),
    openGraphImage: '/images/og-default.jpg',
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          {t.home.hero.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-loose">
          {t.home.hero.subtitle.replace('{{dives}}', DIVE_STATS.countDives.toString())}
        </p>
        <div className="relative aspect-[16/9]">
          <Image
            src="/images/banner.png"
            alt="Hero banner"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto border-t border-gray-200 my-4"></div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <Link href={`/${lang}/blog`} className="order-2 sm:order-2 md:order-1 relative">
          <Image
            src="/images/blog-banner.png"
            alt="Blog section"
            width={800}
            height={600}
            className="object-cover rounded-lg shadow-lg w-full h-auto"
          />
        </Link>
        <div className="order-1 sm:order-1 md:order-2 relative flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 whitespace-nowrap hover:underline text-center">
            <Link href={`/${lang}/blog`}>
              {t.home.sections.blog.title}
            </Link>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            {t.home.sections.blog.description}
          </p>
        </div>
      </div>

      {/* Marine Life Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <Link href={`/${lang}/marine-life`} className="order-2">
          <div> 
            <Image
              src="/images/database-banner.png"
              alt="Marine life database"
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </Link>
        <div className="md:order-1">
          <h2 className="text-3xl font-bold mb-4 whitespace-nowrap hover:underline text-center">
            <Link href={`/${lang}/marine-life`}>
            {t.home.sections.marineLife.title}
            </Link>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            {t.home.sections.marineLife.description}
          </p>
        </div>
      </div>
    </div>
  );
}
