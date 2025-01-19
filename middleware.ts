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
  matcher: ["/database/:path*", "/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
