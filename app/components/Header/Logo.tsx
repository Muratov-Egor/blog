import Image from 'next/image';
import Link from 'next/link';
import { Locale } from "@/i18n-config";

interface LogoProps {
  siteName: string;
  lang: Locale;
}

export default function Logo({ siteName, lang }: LogoProps) {
  return (
    <Link href={`/${lang}`} className="flex items-center gap-5 hover:no-underline">
      <Image src="/images/logo.png" alt="Logo" width="50" height="50" />
      <h1 className="text-2xl font-bold whitespace-nowrap">{siteName}</h1>
    </Link>
  );
}
