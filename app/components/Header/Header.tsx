import React from 'react';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
{/* todo Wait for en */}
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import MobileMenu from './MobileMenu';

export default async function Header({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang);

  return (
    <header className="flex flex-col gap-4 p-4 mt-6 mb-6 bg-white dark:bg-gray-900 transition-colors duration-200 mx-auto">
      {/* Для мобильных и планшетных устройств */}
      <div className="flex flex-col lg:hidden">
        <Logo siteName={t.header.siteName} lang={lang} />
        <div className="flex justify-between items-center gap-2 mt-6">
          <SearchBar placeholder={t.header.searchPlaceholder} />
          <MobileMenu nav={t.header.nav} lang={lang} />
        </div>
      </div>

      {/* Для средних и больших экранов (десктоп) */}
      <div className="hidden lg:flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <Logo siteName={t.header.siteName} lang={lang} />
        <NavBar nav={t.header.nav} lang={lang} />
        <ThemeSwitcher />
        {/* todo Wait for en */}
        {/* <LanguageSwitcher initialLang={lang} /> */}
        <SearchBar placeholder={t.header.searchPlaceholder} />
      </div>
    </header>
  );
}