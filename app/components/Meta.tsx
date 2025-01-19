import { Metadata } from 'next';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

type MetaProps = {
  params: Promise<{ lang: Locale }>;
  title: string;
  description: string;
  keywords?: string;
  openGraphImage?: string;
};

export async function generateMeta({ params, title, description, keywords, openGraphImage }: MetaProps): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return {
    title: title || 'Diver\'s Notes',
    description: description || 'Blog about scuba diving',
    keywords: keywords || "Scuba diving",
    openGraph: {
      title: title || 'Diver\'s Notes',
      description: description || 'Blog about scuba diving',
      images: [openGraphImage || '/images/banner.png'],
    },
  };
} 