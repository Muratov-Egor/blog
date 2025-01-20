'use client';

import React, { useState, useRef } from 'react';
import { Locale } from "@/i18n-config";
import NavBar from './NavBar';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useClickOutside } from '@/hooks/useClickOutside';

const MobileMenu = ({ nav, lang }: { nav: any; lang: Locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-200"
      >
        ☰ {/* Иконка меню */}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-4 shadow-lg p-4 w-72 bg-white dark:bg-gray-800 rounded-lg z-50">
          <div className="flex flex-col items-center"> {/* Центрируем элементы */}
            <NavBar nav={nav} lang={lang} />
            <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
            <ThemeSwitcher />
            {/* <LanguageSwitcher initialLang={lang} /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 