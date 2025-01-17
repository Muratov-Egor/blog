import Image from 'next/image';

interface LogoProps {
  siteName: string;
}

export default function Logo({ siteName }: LogoProps) {
  return (
    <div className="flex items-center gap-5">
      <Image src="/images/logo.png" alt="Logo" width="50" height="50" />
      <h1 className="text-2xl font-bold whitespace-nowrap">{siteName}</h1>
    </div>
  );
}
