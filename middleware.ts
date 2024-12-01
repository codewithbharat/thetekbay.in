import jwt from 'jsonwebtoken';
import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth_token')?.value;
    const isApiRoute = req.nextUrl.pathname.startsWith('/api');

    if (!token) {
        if (isApiRoute) {
            return new NextResponse('Unauthorized', { status: 401 });
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    try {
        jwt.verify(token as string, process.env.JWT_SECRET!);
        return NextResponse.next();
    } catch {
        if (isApiRoute) {
            return new NextResponse('Unauthorized', { status: 401 });
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
}

export const config = {
    matcher: ['/dashboard/:path*'] // make sure paths match the actual routes
};