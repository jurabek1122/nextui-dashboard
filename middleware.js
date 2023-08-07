import { NextResponse } from 'next/server'
 
export function middleware(request) {
  let verify = request.cookies.get('loggedin')
  if(!verify) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/teachers/:path*', '/groups/:path*', '/exams/:path*' ]
}