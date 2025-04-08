// import {generateSecret, jwtVerify, KeyLike} from 'jose'
import { jwtVerify } from 'jose'
import type { NextRequest } from 'next/server'
import { NextResponse as res } from 'next/server'

import { secret } from './pages/api/login'

export const config = {
  matcher: [
    '/home',
    '/api/userLogged',
    '/posts/:path*',
    '/users/:path*',
    '/search/:path*'
  ]
}

export async function middleware(req: NextRequest) {
  const response = res.next()

  if (req.cookies.get('token') === undefined) {
    return res.redirect('http://localhost:3000')
  }

  try {
    await jwtVerify(req.cookies.get('token') as string, secret)
  } catch {
    response.cookies.set('token', '', { maxAge: 0 })
    return res.redirect('http://localhost:3000')
  }

  return response
}
