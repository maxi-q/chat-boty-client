// app/api/login/route.ts
import { sha512 } from 'js-sha512'

import { serialize } from 'cookie'
import { NextRequest, NextResponse } from 'next/server'

// Обрабатываем POST запрос на логин
export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const token = sha512(`${email}:${password}`)

  if (token === process.env.AUTHORIZATION_KEY) {
    const response = NextResponse.json({ message: 'Login successful' })
    response.headers.set(
      'Set-Cookie',
      serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 365 * 100,
        path: '/',
      })
    )
    return response
  }

  // Если логин неверный

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
}
