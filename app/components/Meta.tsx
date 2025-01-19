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
    title: title || 'TITLE',
    description: description || 'DESCRIPTION',
    keywords: keywords || "KEYWORDS",
    openGraph: {
      title: title || 'TITLE',
      description: description || 'DESCRIPTION',
      images: [openGraphImage || '/images/banner.png'],
    },
  };
} 