import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/home"]; // Removed /sessions since it doesn't exist
const publicRoutes = [
  "/",
  "/register", // ✅ Fixed: was /signup
  "/confirm-account",
  "/forgot-password", // ✅ Fixed: added leading slash
  "/reset-password", // ✅ Fixed: added leading slash
  "/verify-mfa",
  "/login", // ✅ Added: this route exists
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log("path:---", path);
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const accessToken = req.cookies.get("accessToken")?.value;
  console.log("accessToken:---", accessToken ? "present" : "missing"); // ✅ Added for debugging

  if (isProtectedRoute && !accessToken) {
    console.log("Redirecting to login - no access token for protected route");
    return NextResponse.redirect(new URL("/login", req.nextUrl)); // ✅ Better to redirect to login
  }

  if (isPublicRoute && accessToken) {
    console.log("Redirecting to home - has access token on public route");
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }

  return NextResponse.next();
}

// ✅ Added: This tells Next.js which paths to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
