import Image from 'next/image';
import Link from 'next/link';
import { Locale } from "@/i18n-config";

interface LogoProps {
  siteName: string;
  lang: Locale;
}

export default function Logo({ siteName, lang }: LogoProps) {
  return (
    <Link href={`/${lang}`} className="flex items-center gap-2 hover:no-underline flex-1">
      <Image src="/images/logo.png" alt="Logo" width="50" height="50" />
      <p className="text-3xl font-bold whitespace-nowrap">{siteName}</p>
    </Link>
  );
}
