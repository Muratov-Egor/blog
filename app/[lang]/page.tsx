import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getDictionary(lang);

  return (
    <div>
      <h1>{t.home.hero.title}</h1>
    </div>
  );
}
