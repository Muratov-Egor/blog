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
          <a href={`/${lang}`} className="hover:underline">{nav.home}</a>
        </li>
        <li>
          <a href={`/${lang}/blog`} className="hover:underline">{nav.blog}</a>  
        </li>
        <li>
          <a href={`/${lang}/marine-life`} className="hover:underline">{nav.marineLife}</a>
        </li>
      </ul>
    </nav>
  );
}