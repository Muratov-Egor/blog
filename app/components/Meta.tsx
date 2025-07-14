import { Metadata } from 'next';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

type MetaProps = {
  params: Promise<{ lang: Locale }>;
  title: string;
  siteName?: string;
  description: string;
  keywords?: string;
  openGraphImage?: string;
  canonicalUrl?: string;
};

export async function generateMeta({ params, title, description, keywords, openGraphImage, canonicalUrl }: MetaProps): Promise<{
  title: string;
  siteName: string;
  description: string;
  keywords: string;
  openGraph: { title: string; description: string; images: string[]; siteName?: string; };
  alternates: { canonical: string }
}> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const baseUrl = `https://divernotes.com/${lang}`;
  const canonical = canonicalUrl || baseUrl;

  return {
    title: title || 'Diver\'s Notes',
    siteName: 'Diver\'s Notes',
    description: description || 'Blog about scuba diving',
    keywords: keywords || "Scuba diving",
    openGraph: {
      siteName: 'Diver\'s Notes',
      title: title || 'Diver\'s Notes',
      description: description || 'Blog about scuba diving',
      images: [openGraphImage || '/images/banner.png'],
    },
    alternates: {
      canonical: canonical,
    },
  };
}
