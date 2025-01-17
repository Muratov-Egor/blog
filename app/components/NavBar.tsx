interface NavBarProps {
  nav: {
    home: string;
    blog: string;
    marineLife: string;
  }
}

export default function NavBar({ nav }: NavBarProps) {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-col sm:flex-row items-center gap-4  whitespace-nowrap">
        <li>
          <a href="/" className="hover:text-blue-200">{nav.home}</a>
        </li>
        <li>
          <a href="/blog" className="hover:text-blue-200">{nav.blog}</a>
        </li>
        <li>
          <a href="/marine-life" className="hover:text-blue-200">{nav.marineLife}</a>
        </li>
      </ul>
    </nav>
  );
}