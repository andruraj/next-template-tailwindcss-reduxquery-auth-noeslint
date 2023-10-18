import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param {NextRequest} req
 * @returns {NextResponse}
 */
export function middleware(req) {
  const role = req.cookies.get("Role");
  const { pathname } = req.nextUrl;
  let absolutePath;

  if (!!role) {
    if (role.value === "User") {
      if (pathname.startsWith("/admin")) absolutePath = "/unauthorized";
    }
    if (pathname === "/login") {
      absolutePath = "/";
    }
  } else absolutePath = "/login";

  const absoluteURL = new URL(absolutePath, req.nextUrl.origin);

  if (!!absolutePath && pathname !== absolutePath)
    return NextResponse.redirect(absoluteURL.toString());
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
