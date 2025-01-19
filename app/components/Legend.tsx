import { SiteType } from "@/types/diveSite";
import SiteIcon from "@/app/components/SiteIcon";

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

  export default Legend;