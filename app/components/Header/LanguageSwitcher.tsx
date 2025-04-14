'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Locale } from '@/i18n-config';

interface LanguageSwitcherProps {
  initialLang: Locale;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ initialLang }) => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<Locale>(initialLang);

  const alternativeLang: Locale = currentLang === 'ru' ? 'en' : 'ru';
  // Используем эмодзи флагов вместо текста
  const flags = {
    ru: '🇷🇺',
    en: '🇬🇧'
  };

  const handleLanguageChange = () => {
    setCurrentLang(alternativeLang);
    localStorage.setItem('preferredLanguage', alternativeLang);

    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${alternativeLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700
                text-gray-700 dark:text-gray-200 hover:bg-gray-300
                dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label={`Switch to ${alternativeLang === 'en' ? 'English' : 'Russian'}`}
    >
      {flags[alternativeLang]}
    </button>
  );
};

export default LanguageSwitcher;
