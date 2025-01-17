import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div>
      <h1>{t.title}</h1>
    </div>
  );
}
