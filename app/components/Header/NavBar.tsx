import { Locale } from "@/i18n-config";

interface NavBarProps { 
  nav: {
    home: string;
    blog: string;
    marineLife: string;
  }
  lang: Locale;
}

export default function NavBar({ nav, lang }: NavBarProps) {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-col sm:flex-row items-center gap-4 text-center">
        <li>
          <a href={`/${lang}`} className="hover:text-blue-200">{nav.home}</a>
        </li>
        <li>
          <a href={`/${lang}/blog`} className="hover:text-blue-200">{nav.blog}</a>  
        </li>
        <li>
          <a href={`/${lang}/marine-life`} className="hover:text-blue-200">{nav.marineLife}</a>
        </li>
      </ul>
    </nav>
  );
}