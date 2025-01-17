import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Header({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang);
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4">
      <Logo siteName={t.header.siteName} />
      <NavBar nav={t.header.nav} />
      <SearchBar placeholder={t.header.searchPlaceholder} />
    </header>
  )
}
