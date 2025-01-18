import { i18n, type Locale } from "@/i18n-config";
import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "i18n within app router - Vercel Examples",
  description: "How to do i18n in Next.js 15 within app router",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
