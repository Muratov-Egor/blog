'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 
                  text-gray-700 dark:text-gray-200 transition-colors duration-200"
      >
        <span className="opacity-0">🌙</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 
                text-gray-700 dark:text-gray-200 hover:bg-gray-300 
                dark:hover:bg-gray-600 transition-colors duration-200"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher; 