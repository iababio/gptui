import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const email = request.cookies.get('email');
    if (request.nextUrl.pathname.startsWith('/login') && email) {
      return NextResponse.rewrite(new URL('/', request.url));
    }
  } catch (error: any) {
    console.error(error.message); //raises the error
  }
}
export default withAuth({
  callbacks: {
    async authorized({ token }) {
      if (process.env.NEXTAUTH_ENABLED === 'false' && token?.email) {
        return true;
      }
      if (!token?.email) {
        return false;
      } else {
        const pattern = process.env.NEXTAUTH_EMAIL_PATTERN || '';
        if (!pattern || token?.email?.match('^' + pattern + '$')) {
          return true;
        }
        return false;
      }
    },
  },
});

export const config = { matcher: ['/chat'] };
