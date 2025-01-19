import { generateMeta } from "@/app/components/Meta";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

type Props = {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return await generateMeta({
    params,
    title: t.metadata.map.title,
    description: t.metadata.map.description,
    keywords: t.metadata.map.keywords.join(', '),
    openGraphImage: '/images/og-map.png',
  });
}

export default async function MapPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const { page } = await searchParams;
  const t = await getDictionary(lang);
  


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center border-b border-gray-200 pb-2 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{t.map.title}</h1>
        <span className="text-sm text-gray-500 mb-6 text-center">{t.map.description}</span>
      </div>
    
    </div>
  );
}
