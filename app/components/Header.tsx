import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default async function Header({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang);

  return (
    <header className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4 bg-white dark:bg-gray-900 transition-colors duration-200">
      <Logo siteName={t.header.siteName} lang={lang} />
      <NavBar nav={t.header.nav} lang={lang} />
      <SearchBar placeholder={t.header.searchPlaceholder} />
      <div className="flex items-center gap-4">
        <LanguageSwitcher initialLang={lang} />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
