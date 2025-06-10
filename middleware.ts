import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware();

export const config = {

  publicRoutes: ['/', '/register', '/sign-up'],
  afterAuth(auth: any, req : Request) {
    if (!auth?.userId  && !auth?.isPublicRoute) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }
  },

  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};