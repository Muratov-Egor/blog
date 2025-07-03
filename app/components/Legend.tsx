import { SiteType } from "@/types/diveSite";
import SiteIcon from "@/app/components/SiteIcon";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const Legend = async ({ lang }: { lang: Locale }) => {
    const t = await getDictionary(lang);

    const legendItems: { type: SiteType; label: string }[] = [
      { type: 'reef', label: t.legend.reef },
      { type: 'bay', label: t.legend.bay },
      { type: 'wreck', label: t.legend.wreck },
      { type: 'pinnacle', label: t.legend.pinnacle },
      { type: 'coral_garden', label: t.legend.coral_garden },
      { type: 'lake', label: t.legend.lake },
      { type: 'wall', label: t.legend.wall },
      {type: 'river', label: t.legend.river},
      { type: 'default', label: t.legend.default },
    ];

    return (
      <div className="legend mb-8 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
        <h1 className="text-lg font-semibold mb-2 text-center">{t.legend.title}</h1>
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

  export default Legend;
