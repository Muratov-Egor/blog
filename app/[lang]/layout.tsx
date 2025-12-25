import { i18n, type Locale } from "@/i18n-config";
import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = i18n.locales.includes(lang as Locale) ? (lang as Locale) : i18n.defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
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
          <div className="flex flex-col min-h-screen">
            <Header lang={locale} />
            <main className="flex-1">
              <SpeedInsights />
              {children}
              <Analytics />
            </main>
            <Footer lang={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
