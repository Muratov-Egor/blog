'use client';

import { Locale } from "@/i18n-config";
import Link from "next/link";
import React from 'react';

interface NavBarProps {
  nav: {
    blog: string;
    marineLife: string;
    map: string;
  }
  lang: Locale;
  closeMenu?: () => void;
}

const NavBar = ({ nav, lang, closeMenu }: NavBarProps) => {
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav className="flex md:flex-row flex-col items-center gap-3 md:gap-6">
      <Link
        href={`/${lang}/blog`}
        className="hover:underline no-underline"
        onClick={handleClick}
      >
        {nav.blog}
      </Link>
      <Link
        href={`/${lang}/marine-life`}
        className="hover:underline no-underline"
        onClick={handleClick}
      >
        {nav.marineLife}
      </Link>
      <Link
        href={`/${lang}/map`}
        className="hover:underline no-underline"
        onClick={handleClick}
      >
        {nav.map}
      </Link>
    </nav>
  );
};

export default NavBar;
