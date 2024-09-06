import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.href

  if (url.includes('/_next/static/')) {
    return NextResponse.next();
  }

  console.log(`[INFO] Requested URL: ${url}, Method: ${req.method}`)

  return NextResponse.next()
}
