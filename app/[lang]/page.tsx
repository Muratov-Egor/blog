import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "@/app/components/Header";
export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getDictionary(lang);

  return (
    <div>
      <Header texts={t.header} />
      <h1>{t.home.hero.title}</h1>
    </div>
  );
}
