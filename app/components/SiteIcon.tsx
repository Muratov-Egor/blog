import { SiteType } from "@/types/diveSite";

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

export default SiteIcon; 