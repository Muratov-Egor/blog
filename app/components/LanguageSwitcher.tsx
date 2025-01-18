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

  // Определяем альтернативный язык и его отображаемый текст
  const alternativeLang: Locale = currentLang === 'ru' ? 'en' : 'ru';
  const buttonText = currentLang === 'ru' ? 'EN' : 'РУ';

  const handleLanguageChange = () => {
    setCurrentLang(alternativeLang);
    localStorage.setItem('preferredLanguage', alternativeLang);
    
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${alternativeLang}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleLanguageChange}
        className=""
      >
        {buttonText}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 