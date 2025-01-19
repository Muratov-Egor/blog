import { generateMeta } from "@/app/components/Meta";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { DIVE_SITES } from "@/lib/dive-sites";

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

type SiteType = 'reef' | 'bay' | 'wreck' | 'pinnacle' | 'coral_garden' | 'lake' | 'wall' | 'default';

const SiteIcon = ({ type }: { type: SiteType }) => {
  const icons: Record<SiteType, string> = {
    reef: "/images/icons/reef.png",
    bay: "/images/icons/bay.png",
    wreck: "/images/icons/wreck.png",
    pinnacle: "/images/icons/pinnacle.png",
    coral_garden: "/images/icons/coral_garden.png",
    lake: "/images/icons/lake.png",
    wall: "/images/icons/wall.png",
    default: "/images/icons/diver.png",
  };

  return (
    <div className="bg-gray-100 p-2 inline-block ml-2 rounded">
      <img src={icons[type]} alt={type} className="inline-block" style={{ width: '35px', height: '35px' }} />
    </div>
  );
};

const Legend = () => {
  const legendItems: { type: SiteType; label: string }[] = [
    { type: 'reef', label: 'Риф' },
    { type: 'bay', label: 'Залив' },
    { type: 'wreck', label: 'Кораблекрушение' },
    { type: 'pinnacle', label: 'Пик' },
    { type: 'coral_garden', label: 'Коралловый сад' },
    { type: 'lake', label: 'Озеро' },
    { type: 'wall', label: 'Стена' },
    { type: 'default', label: 'Дайвер' },
  ];

  return (
    <div className="legend mb-8 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
      <h1 className="text-lg font-semibold mb-2 text-center">Легенда</h1>
      <div className="flex flex-wrap justify-center">
        {legendItems.map((item) => (
          <div key={item.type} className="flex items-center mr-4 mb-2">
            <SiteIcon type={item.type} />
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default async function MapPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center pb-2 mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">{t.map.title}</h1>
        <span className="text-sm text-gray-500 mb-6">{t.map.description}</span>
      </div>

      <div className="flex flex-col items-center mb-8">
        <iframe
          className="w-full"
          style={{ height: '600px' }}
          src="https://www.google.com/maps/d/u/0/embed?mid=1McszZgxcej74QUEkhM8PcngGD-eVTn4&ehbc=2E312F"
          title="Dive Sites Map"
        ></iframe>
      </div>

      <Legend />

      <div className="mt-8">
        {DIVE_SITES.map((region) => (
          <div key={region.region.en} className="mb-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold mb-0">
                  {lang === 'ru' ? region.region.ru : region.region.en}
                </h2>
                {region.region.links && region.region.links.length > 0 && (
                  <div className="ml-2 flex space-x-2">
                    {region.region.links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        👀
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap justify-start">
              {region.sites.map((site) => (
                <div key={site.name} className="mb-4 w-1/2 md:w-1/3 flex justify-start">
                  <div className="site-item">
                    <p className="mb-1 text-sm flex items-center">
                      <SiteIcon type={site.type as SiteType} />
                      <a
                        href={site.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-2 font-semibold"
                      >
                        {site.name}
                      </a>
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
