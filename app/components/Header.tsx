import Image from 'next/image';

interface HeaderProps {
  texts: {
    siteName: string;
    nav: {
      home: string;
      blog: string;
      marineLife: string;
    };
    searchPlaceholder: string;
  }
}

export default function Header({ texts }: HeaderProps) {
  return <header className="flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold">{texts.siteName}</h1>
    <Image src="/images/logo.png" alt="Logo" width="50" height="50" />
    <nav className="flex items-center">
      <ul className="flex items-center gap-4">
        <li className="hover:text-blue-200">{texts.nav.home}</li>
        <li className="hover:text-blue-200">{texts.nav.blog}</li>
        <li className="hover:text-blue-200">{texts.nav.marineLife}</li>
      </ul>
    </nav>
    <input type="text" placeholder={texts.searchPlaceholder} />
    <button>Search</button>
  </header>
}
