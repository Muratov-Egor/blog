'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, Locale } from '@/i18n-config';

interface LanguageSwitcherProps {
  initialLang: Locale;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ initialLang }) => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<Locale>(initialLang);

  const handleLanguageChange = (newLang: Locale) => {
    setCurrentLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {i18n.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`px-3 py-1 rounded-full ${
            currentLang === locale ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } transition-colors duration-200`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 