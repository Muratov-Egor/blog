import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "@/app/components/Header/Header";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const t = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header lang={lang} />
      <div className="container mx-auto px-4">
        <h1 className="text-gray-900 dark:text-white">{t.home.hero.title}</h1>
      </div>
    </main>
  );
}
