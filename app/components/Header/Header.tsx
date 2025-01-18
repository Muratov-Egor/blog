import React from 'react';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default async function Header({ lang }: { lang: Locale }) {
  const t = await getDictionary(lang);

  return (
    <header className="flex flex-col gap-4 p-4 mt-4 bg-white dark:bg-gray-900 transition-colors duration-200 mx-auto">
      {/* Контейнер для всего содержимого */}
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <Logo siteName={t.header.siteName} lang={lang} />
        </div>

        {/* NavBar */}
        <div className="flex justify-center lg:justify-start">
          <NavBar nav={t.header.nav} lang={lang} />
        </div>

        {/* Контейнер для SearchBar и переключателей */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-end lg:flex-row lg:items-center lg:gap-6">
          {/* SearchBar */}
          <div className="w-full order-2 sm:order-2 md:order-1 md:w-auto">
            <SearchBar placeholder={t.header.searchPlaceholder} />
          </div>

          {/* Переключатели */}
          <div className="flex justify-center gap-2 order-1 sm:order-1 md:order-2">
            <LanguageSwitcher initialLang={lang} />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}