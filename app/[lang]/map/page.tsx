import { generateMeta } from "@/app/components/Meta";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { DIVE_SITES } from "@/lib/dive-sites";
import { SiteType } from "@/types/diveSite";
import SiteIcon from "@/app/components/SiteIcon";
import Legend from "@/app/components/Legend";
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
    title: t.metadata.map.title,
    description: t.metadata.map.description,
    keywords: t.metadata.map.keywords.join(', '),
    openGraphImage: '/images/og-map.png',
  });
}

export default async function MapPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center pb-2 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{t.map.title}</h1>
        <span className="text-sm text-gray-500">{t.map.description}</span>
      </div>

      <div className="flex flex-col items-center mb-8">
        <iframe
          className="w-full"
          style={{ height: '600px' }}
          src="https://www.google.com/maps/d/u/0/embed?mid=1McszZgxcej74QUEkhM8PcngGD-eVTn4&ehbc=2E312F"
          title="Dive Sites Map"
        ></iframe>
      </div>

      <Legend lang={lang} />

      <div>
        {DIVE_SITES.map((region) => (
          <div key={region.region.en} className="mb-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold mb-0">
                  {lang === 'ru' ? region.region.ru : region.region.en}
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-start">
              {region.sites.map((site) => (
                <div key={site.name} className="mb-4 w-1/2 md:w-1/3 flex justify-between">
                  <div className="site-item">
                    <p className="mb-1 text-sm flex items-center cursor-pointer">
                      <SiteIcon type={site.type as SiteType} />
                      <Link
                        href={site.googleMapsUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline ml-2 font-semibold cursor-pointer underline"
                      >
                        {site.name}
                      </Link>
                    </p>
                    <span className="text-gray-500 text-xs ml-2 block">
                      ({site.coordinates?.lat}, {site.coordinates?.lng})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
