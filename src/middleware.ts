import type { NextFetchEvent, NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./libs/i18nNavigation";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  const path = request.nextUrl.pathname;
  if (path === "/sitemap.xml" || path === "/robots.txt") {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
