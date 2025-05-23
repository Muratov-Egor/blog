import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Проверяем, если путь начинается с /database
  if (pathname.startsWith('/database')) {
    const slug = pathname.replace('/database', ''); // Получаем slug
    const newPath = `/marine-life${slug}`; // Формируем новый путь
    return NextResponse.redirect(new URL(newPath, request.url)); // Перенаправляем на новый путь
  }

  // Исключаем robots.txt из редиректа
  if (pathname === '/robots.txt') {
    return NextResponse.next(); // Не перенаправляем, просто продолжаем
  }

  // Исключаем sitemap.xml из редиректа
  if (pathname === '/sitemap.xml') {
    return NextResponse.next(); // Не перенаправляем, просто продолжаем
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/ru${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  matcher: [
    "/database/:path*",
    "/robots.txt",
    "/sitemap.xml",
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
