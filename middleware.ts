import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const logginedRoutes = ['/profile', '/dashboard', '/orders'];

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const cookieStore = await cookies();
  const isAuth = Boolean(cookieStore.get('token')?.value);

  // if user is-not logged-in && route is-protected ===> redirect to the `/` page with query 'toggle-login=true
  if (
    logginedRoutes.some((item) => request.nextUrl.pathname.startsWith(item)) &&
    !isAuth
  ) {
    return NextResponse.redirect(new URL(`/?toggle-login=true`, request.url));
  }

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ['/:path*'],
};
