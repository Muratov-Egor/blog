interface DiveSite {
  region: {
    ru: string;
    en: string;
    links?: string[];
  };
  sites: Array<{
    name: string;
    type?: 'reef' | 'bay' | 'wreck' | 'pinnacle' | 'coral_garden' | 'lake' | 'river' | 'wall' | 'default';
    coordinates?: {
      lat: number;
      lng: number;
    };
    googleMapsUrl?: string;
  }>;
}

export const DIVE_SITES: DiveSite[] = [
    {
      region: {
        ru: "Рача Яй 🇹🇭",
        en: "Racha Yai Island 🇹🇭",
        links: ["/blog/racha-yai"],
      },
      sites: [
        {
          name: "Bay 1",
          type: "bay",
          coordinates: { lat: 7.609361, lng: 98.379114 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.609361,98.379114"
        },
        {
          name: "Bay 2",
          type: "bay",
          coordinates: { lat: 7.60785, lng: 98.378363 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.60785,98.378363"
        },
        {
          name: "Bay 3",
          type: "bay",
          coordinates: { lat: 7.60549, lng: 98.377418 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.60549,98.377418"
        },
        {
          name: "Homerun Reef",
          type: "reef",
          coordinates: { lat: 7.614699, lng: 98.379049 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.614699,98.379049"
        },
        {
          name: "Marlas Mystery",
          type: "wreck",
          coordinates: { lat: 7.6079076, lng: 98.3800767 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6079076,98.3800767"
        },
        {
          name: "Siam Bay",
          type: "coral_garden",
          coordinates: { lat: 7.6129776, lng: 98.3718318 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6129776,98.3718318"
        },
        {
          name: "Bungalow Bay North Wall",
          type: "wall",
          coordinates: { lat: 7.6111273, lng: 98.3638067 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6111273,98.3638067"
        },
        {
          name: "Bungalow Bay South Wall",
          type: "wall",
          coordinates: { lat: 7.607469, lng: 98.3630985 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.607469,98.3630985"
        }
      ]
    },
    {
      region: {
        ru: "Рача Ной 🇹🇭",
        en: "Racha Noi Island 🇹🇭",
        links: ["/blog/racha-noi"],
      },
      sites: [
        {
          name: "Camera Bay",
          type: "bay",
          coordinates: { lat: 7.5129151, lng: 98.3257485 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.5129151,98.3257485"
        },
        {
          name: "Manta Bay",
          type: "bay",
          coordinates: { lat: 7.5156635, lng: 98.3336294 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.5156635,98.3336294"
        },
        {
          name: "Freedom Bay",
          type: "bay",
          coordinates: { lat: 7.5010697, lng: 98.3272779 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.5010697,98.3272779"
        },
        {
          name: "Banana Bay",
          type: "reef",
          coordinates: { lat: 7.496983, lng: 98.32519 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.496983,98.32519"
        }
      ]
    },
    {
      region: {
        ru: "Архипелаг Пхи Пхи 🇹🇭",
        en: "Phi Phi Archipelago 🇹🇭",
        links:  ["/blog/koh-bida-nok", '/blog/turtle-rock']
      },
      sites: [
        {
          name: "Koh Bida Nok",
          type: "wall",
          coordinates: { lat: 7.654001, lng: 98.766189 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.654001,98.766189"
        },
        {
          name: "Koh Bida Nai",
          type: "coral_garden",
          coordinates: { lat: 7.657468, lng: 98.766961 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.657468,98.766961"
        },
        {
          name: "Phi Ley Wall",
          type: "wall",
          coordinates: { lat: 7.6853255, lng: 98.7697578 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6853255,98.7697578"
        },
        {
          name: "Turtle Rock",
          type: "wall",
          coordinates: { lat: 7.6855072, lng: 98.7625493 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6855072,98.7625493"
        },
        {
          name: "Viking Bay",
          type: "bay",
          coordinates: { lat: 7.6912265, lng: 98.7672043 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6912265,98.7672043"
        }
      ]
    },
    {
      region: {
        ru: "Прочее рядом с Пхукетом 🇹🇭",
        en: "Other sites near Phuket 🇹🇭",
        links: ["/blog/king-cruiser", "/blog/sharkPoint"]
      },
      sites: [
        {
          name: "King Cruiser Wreck",
          type: "wreck",
          coordinates: { lat: 7.811684, lng: 98.644867 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.811684,98.644867"
        },
        {
          name: "Shark Point",
          type: "pinnacle",
          coordinates: { lat: 7.805604, lng: 98.632593 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.805604,98.632593"
        },
        {
          name: "Koh Doc Mai",
          type: "wall",
          coordinates: { lat: 7.797696, lng: 98.531399 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.797696,98.531399"
        }
      ]
    },
    {
      region: {
        ru: "Симиланские острова 🇹🇭",
        en: "Similan Islands 🇹🇭",
        links: ["/blog/diving-safari-similans"]
      },
      sites: [
        {
          name: "Shark Fin Reef",
          type: "reef",
          coordinates: { lat: 8.50878, lng: 97.667491 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8.50878,97.667491"
        },
        {
          name: "Eel Garden",
          type: "coral_garden",
          coordinates: { lat: 8.5688, lng: 97.645648 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8.5688,97.645648"
        },
        {
          name: "Honeymoon Bay",
          type: "bay",
          coordinates: { lat: 8.565108, lng: 97.639554 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8.565108,97.639554"
        },
        {
          name: "Christmas Point",
          type: "reef",
          coordinates: { lat: 8.6804331, lng: 97.6397249 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8.6804331,97.6397249"
        },
        {
          name: "North Point",
          type: "reef",
          coordinates: { lat: 8.6825427, lng: 97.6483178 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8.6825427,97.6483178"
        },
        {
          name: "Koh Bon Ridge",
          type: "reef",
          coordinates: { lat: 8.827922, lng: 97.795658 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8.827922,97.795658"
        },
        {
          name: "Tachai Pinnacle",
          type: "pinnacle",
          coordinates: { lat: 9.057579, lng: 97.813983 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9.057579,97.813983"
        },
        {
          name: "Tachai Reef",
          type: "reef",
          coordinates: { lat: 9.063766, lng: 97.816365 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9.063766,97.816365"
        },
        {
          name: "Richelieu Rock",
          type: "pinnacle",
          coordinates: { lat: 9.3642159, lng: 98.0228141 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9.3642159,98.0228141"
        }
      ]
    },
    {
      region: {
        ru: "Ко Тао 🇹🇭",
        en: "Koh Tao 🇹🇭",
        links: ["/blog/koh-tao"]
      },
      sites: [
        {
          name: "Japanese garden",
          type: "coral_garden",
          coordinates: { lat: 10.1189757, lng: 99.8150037 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1189757,99.8150037"
        },
        {
          name: "Buoyancy World",
          type: "reef",
          coordinates: { lat: 10.1175781, lng: 99.8127359 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1175781,99.8127359"
        },
        {
          name: "Green rock",
          type: "pinnacle",
          coordinates: { lat: 10.1245525, lng: 99.810766 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1245525,99.810766"
        },
        {
          name: "Red rock",
          type: "pinnacle",
          coordinates: { lat: 10.12376, lng: 99.811547 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.12376,99.81547"
        },
        {
          name: "Hin Pee Wee",
          type: "reef",
          coordinates: { lat: 10.1094938, lng: 99.8167313 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1094938,99.8167313"
        },
        {
          name: "White Rock",
          type: "pinnacle",
          coordinates: { lat: 10.1100219, lng: 99.8140491 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1100219,99.8140491"
        },
        {
          name: "Southwest pinnacle",
          type: "pinnacle",
          coordinates: { lat: 9.9990956, lng: 99.7791882 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9.9990956,99.7791882"
        },
        {
          name: "HTMS Sattakut",
          type: "wreck",
          coordinates: { lat: 10.1055618, lng: 99.8136191 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1055618,99.8136191"
        },
        {
          name: "Nang Yuan Drop",
          type: "reef",
          coordinates: { lat: 10.1206587, lng: 99.8154892 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1206587,99.8154892"
        },
        {
          name: "Twins Pinnacle",
          type: "pinnacle",
          coordinates: { lat: 10.11741, lng: 99.8130099 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.11741,99.8130099"
        },
        {
          name: "HTMS Suphairin 313",
          type: "wreck",
          coordinates: { lat: 10.1151954, lng: 99.8107657 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1151954,99.8107657"
        },
        {
          name: "Junkyard Reef",
          type: "reef",
          coordinates: { lat: 10.0866034, lng: 99.8230292 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.0866034,99.8230292"
        },
        {
          name: "Chumphon Pinnacle",
          type: "pinnacle",
          coordinates: { lat: 10.172483, lng: 99.778683 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.172483,99.778683"
        },
        {
          name: "Mango Bay",
          type: "bay",
          coordinates: { lat: 10.1220013, lng: 99.8348572 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1220013,99.8348572"
        },
        {
          name: "Nang Yuan Pinnacle",
          type: "pinnacle",
          coordinates: { lat: 10.1188048, lng: 99.8159384 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.1188048,99.8159384"
        },
        {
          name: "Aow Leuk",
          type: "default",
          coordinates: { lat: 10.0711285, lng: 99.8407474 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.0711285,99.8407474"
        },
        {
          name: "Tanote Bay",
          type: "bay",
          coordinates: { lat: 10.0840703, lng: 99.8489005 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=10.0840703,99.8489005"
        }
      ]
    },
    {
      region: {
        ru: "Белград 🇷🇸",
        en: "Serbia 🇷🇸"
      },
      sites: [
        {
          name: "Ada Lake",
          type: "lake",
          coordinates: { lat: 44.7765494, lng: 20.3747271 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=44.7765494,20.3747271"
        },
        {
          name: "Barge",
          type: "river",
          coordinates: { lat: 44.797727, lng: 20.4256299 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=44.797727,20.42562991"
        }
      ]
    },
    {
      region: {
        ru: "Херцег Нови 🇲🇪",
        en: "Herceg Novi 🇲🇪",
      },
      sites: [
        {
          name: "Rafaello Beach",
          type: "bay",
          coordinates: { lat: 42.4568573, lng: 18.521841101 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=42.4568573,18.52184110"
        }
      ]
    },
    {
      region: {
        ru: "Будва 🇲🇪",
        en: "Budva 🇲🇪",
      },
      sites: [
        {
          name: "The Tunnels. St. Nicholas Island",
          type: "bay",
          coordinates: { lat: 42.2699151, lng: 18.8451467 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=42.2699151,18.8451467"
        },
        {
          name: "Mogren Cove",
          type: "bay",
          coordinates: { lat: 42.2741953, lng: 18.83018250 },
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=42.2741953,18.83018250"
        }
      ]
    }
  ];

interface DiveStats {
  countDives: number;
  localsVisited: number;
}

export const DIVE_STATS: DiveStats = {
  countDives: 281,
  localsVisited: DIVE_SITES.reduce((acc, region) => acc + region.sites.length, 0)
};
