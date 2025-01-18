import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const t = await getDictionary(lang);

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-gray-900 dark:text-white">{t.home.hero.title}</h1>
      </div>
    </main>
  );
}
