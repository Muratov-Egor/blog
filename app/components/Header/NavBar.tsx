import { Locale } from "@/i18n-config";
import Link from "next/link";

interface NavBarProps {
  nav: {
    blog: string;
    marineLife: string;
    map: string;
  }
  lang: Locale;
}

export default function NavBar({ nav, lang }: NavBarProps) {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-col lg:flex-row items-center gap-4 text-center">
        <li>
          <Link href={`/${lang}/blog`} className="hover:underline no-underline">{nav.blog}</Link>
        </li>
        <li>
          <Link href={`/${lang}/marine-life`} className="hover:underline no-underline">{nav.marineLife}</Link>
        </li>
        <li>
          <Link href={`/${lang}/map`} className="hover:underline no-underline">{nav.map}</Link>
        </li>
      </ul>
    </nav>
  );
}
