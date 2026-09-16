import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, type Locale } from "@/i18n/config";

function resolveLocale(pathname: string): { locale: Locale; internalPath: string } {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    const rest = pathname.slice(3) || "";
    return { locale: "ar", internalPath: `/ar${rest || ""}` };
  }
  const rest = pathname === "/" ? "" : pathname;
  return { locale: defaultLocale, internalPath: `/en${rest}` };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") // static assets
  ) {
    return NextResponse.next();
  }

  const { locale, internalPath } = resolveLocale(pathname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", pathname);

  const url = request.nextUrl.clone();
  url.pathname = internalPath;

  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|manifest.json|og-image.jpg|logo-footer.jpg|.*\\..*).*)"],
};
