import { Locale } from "@/i18n-config";

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
          <a href={`/${lang}/blog`} className="hover:underline">{nav.blog}</a>  
        </li>
        <li>
          <a href={`/${lang}/marine-life`} className="hover:underline">{nav.marineLife}</a>
        </li>
        <li>
          <a href={`/${lang}/map`} className="hover:underline">{nav.map}</a>
        </li>
      </ul>
    </nav>
  );
}