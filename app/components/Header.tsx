import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LanguageSwitcher from './LanguageSwitcher';

export default async function Header({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang);

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4">
      <Logo siteName={t.header.siteName} lang={lang} />
      <NavBar nav={t.header.nav} lang={lang} />
      <SearchBar placeholder={t.header.searchPlaceholder} />
      <LanguageSwitcher initialLang={lang} />
    </header>
  )
}
